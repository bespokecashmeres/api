const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("./schema");
const { ObjectId } = require("mongoose").Types;

RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.create = async (req) => {
  const highestOrder = await database
    .findOne({ productTypeId: new ObjectId(req.productTypeId) })
    .sort("-rowOrder")
    .exec();
  const nextOrder = highestOrder ? highestOrder.rowOrder + 1 : 1;
  return await database.create({ ...req, rowOrder: nextOrder });
};

module.exports.findOneRecord = async (req) => {
  return await database.findOne(req);
};

module.exports.findRecord = async (req) => {
  return await database.find(req);
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
    return undefined;
  }
};

module.exports.getListData = async (qData) => {
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

  // Match Stage for Filtering and Searching
  const matchStage = {
    $match: {
      ...newFilterObj,
      ...(search && {
        [`name.${language}`]: { $regex: search, $options: "i" },
      }),
    },
  };

  const lookupStage = [
    {
      $lookup: {
        from: "producttypes",
        localField: "productTypeId",
        foreignField: "_id",
        as: "productTypeData",
      },
    },
    {
      $unwind: {
        path: "$productTypeData",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      name: { $ifNull: [`$name.${language}`, ""] },
      productType: { $ifNull: [`$productTypeData.name.${language}`, ""] },
      createdAt: 1,
      minRange: 1,
      maxRange: 1,
      updatedAt: 1,
      status: 1,
    },
  };

  // Sort Options
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

  // Aggregation Query
  const aggregationPipeline = [
    matchStage,
    ...lookupStage,
    projectStage,
    { $sort: sortOptions },
    { $skip: (page - 1) * perPage },
    { $limit: perPage },
  ];

  // Execute the Aggregation
  const [data, totalCount] = await Promise.all([
    database.aggregate(aggregationPipeline).exec(),
    database.countDocuments(matchStage.$match),
  ]);

  // Return Paginated Data
  return {
    currentPage: page,
    totalCount,
    totalPage: Math.ceil(totalCount / perPage),
    data,
  };
};

module.exports.getDataForDropdown = async (
  language = DEFAULT_LOCALE,
  productTypeId
) => {
  const pipeline = [
    {
      $match: {
        status: true,
        productTypeId: new ObjectId(productTypeId),
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

module.exports.getById = async (id) => {
  return await database.findById(id);
};

module.exports.getByQuery = async (obj) => {
  return await database.findOne(obj);
};

module.exports.findAll = async ({
  productTypeId,
  language = DEFAULT_LOCALE,
}) => {
  const projectFields = {
    _id: 1,
    name: `$name.${language}`,
    rowOrder: 1,
    createdAt: 1,
    updatedAt: 1,
    status: 1,
    productTypeId: 1,
  };

  const pipeline = [
    {
      $match: {
        status: true,
        productTypeId: new ObjectId(productTypeId),
      },
    },
    { $project: projectFields },
    { $sort: { rowOrder: 1 } },
  ];

  return await database.aggregate(pipeline);
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

module.exports.getActive = async () => {
  return await database
    .find({
      status: true,
    })
    .sort({ rowOrder: 1 });
};

module.exports.DeleteById = async (id) => {
  const deletedDoc = await database.findByIdAndDelete(id);
  const remainingRows = await database
    .find({ productTypeId: deletedDoc.productTypeId })
    .sort({ rowOrder: 1 });
  const bulkOperations = remainingRows.map((row, index) => ({
    updateOne: {
      filter: { _id: row._id },
      update: { $set: { rowOrder: index + 1 } },
    },
  }));
  await database.bulkWrite(bulkOperations);
};
