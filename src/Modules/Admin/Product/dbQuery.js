const product = require("./schema");
const database = product;
const { ObjectId } = require("mongoose").Types;

RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.create = async (req) => {
  const highestOrder = await database.findOne().sort("-rowOrder").exec();
  const nextOrder = highestOrder ? highestOrder.rowOrder + 1 : 1;
  return await database.create({ ...req, rowOrder: nextOrder });
};

module.exports.findOneRecord = async (req) => {
  return await database.findOne(req);
};

module.exports.getRelatedOptionsForDropdown = async (req = {}) => {
  const { language = DEFAULT_LOCALE, _id } = req;
  const pipeline = [
    {
      $match: {
        status: true,
        ...(_id ? { _id: { $ne: new ObjectId(_id) } } : {}),
      },
    },
    {
      $project: {
        value: "$_id",
        label: { $ifNull: [`$name.${language}`, ""] },
        _id: 0,
      },
    },
  ];

  return await database.aggregate(pipeline);
};

module.exports.getPaginationData = async (qData) => {
  const {
    perPage,
    page,
    sortBy = "createdAt",
    sortOrder = "desc",
    search = "",
    filter = {},
    language = DEFAULT_LOCALE,
  } = qData;
  const newFilterObj = Object.fromEntries(
    Object.keys(filter).map((filterKey) => [
      filterKey,
      filterKey.endsWith("Id")
        ? new ObjectId(filter[filterKey])
        : filter[filterKey],
    ])
  );
  let searchQuery = { ...newFilterObj };
  if (search) {
    searchQuery[`name.${language}`] = { $regex: new RegExp(search, "i") };
  }

  const sortOptions = { rowOrder: 1 };
  if (sortBy) {
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  }

  const pipeline = [
    {
      $match: searchQuery,
    },
    {
      $sort: {
        ...sortOptions,
        ...(sortBy !== "createdAt" ? { createdAt: -1 } : {}),
      },
    },
    {
      $project: {
        name: { $ifNull: [`$name.${language}`, ""] },
        price: 1,
        discountedPrice: 1,
        slug: 1,
        noOfQuantity: 1,
        quantityDiscount: 1,
        status: 1,
        mainImage: {
          $arrayElemAt: [
            {
              $map: {
                input: "$colors",
                as: "color",
                in: { $arrayElemAt: ["$$color.images", 0] },
              },
            },
            0,
          ],
        },
      },
    },
  ];

  const count = (await database.aggregate(pipeline))?.length;

  pipeline.push(
    {
      $skip: (Number(page) - 1) * Number(perPage),
    },
    {
      $limit: Number(perPage),
    }
  );

  const data = await database.aggregate(pipeline);

  return {
    currentPage: page,
    totalCount: count,
    totalPage: count ? Math.ceil(count / perPage) : 0,
    data,
  };
};

module.exports.rowsReorderData = async (data) => {
  const bulkOperations = data.map((row) => ({
    updateOne: {
      filter: { _id: new ObjectId(row._id) },
      update: { $set: { rowOrder: row.order } },
    },
  }));
  try {
    return await database.bulkWrite(bulkOperations);
  } catch (err) {
    console.error(`Error in bulkCreate for:`, err);
    throw err; // Re-throw the error to handle it at a higher level if necessary
  }
};

module.exports.getById = async (id) => {
  return await database.findById(id);
};

module.exports.Update = async (data) => {
  return await database
    .findOneAndUpdate(
      { _id: new ObjectId(data._id) },
      { $set: { ...data } },
      {
        new: true,
      }
    )
    .lean();
};

module.exports.DeleteById = async (id) => {
  await database.findByIdAndDelete(id);
  const remainingRows = await database.find().sort({ rowOrder: 1 });
  const bulkOperations = remainingRows.map((row, index) => ({
    updateOne: {
      filter: { _id: row._id },
      update: { $set: { rowOrder: index + 1 } }, // Set new sequential order
    },
  }));
  await database.bulkWrite(bulkOperations);
};

module.exports.getActive = async () => {
  return await database
    .find({
      status: true,
    })
    .sort({ rowOrder: 1 });
};
