const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("./schema");
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
module.exports.findRecord = async (req) => {
  return await database.find(req);
};

module.exports.totalCount = async (data) => {
  const { search } = data;
  const { couponCode } = search;
  let searchObj = {};
  if (couponCode) {
    searchObj["couponCode"] = {
      $regex: new RegExp(RegExp.escape(couponCode), "i"),
    };
  }
  return await database.countDocuments(searchObj);
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

  const matchStage = {
    $match: { ...filter, ...(search && { [`title.${language}`]: { $regex: search, $options: "i" } }) },
  };

  const projectFields = {
    _id: 1,
    title: { $ifNull: [`$title.${language}`, ""] },
    description: { $ifNull: [`$description.${language}`, ""] },
    image: 1,
    pdf: 1,
    rowOrder: 1,
    createdAt: 1,
    updatedAt: 1,
    status: 1,
  };

  const sortStage = {
    $sort: { [sortBy]: sortOrder === "desc" ? -1 : 1 },
  };

  const skipLimitStage = [
    { $skip: (page - 1) * perPage },
    { $limit: perPage },
  ];

  const pipeline = [
    matchStage,
    { $project: projectFields },
    sortStage,
    ...skipLimitStage,
  ];

  const [data, count] = await Promise.all([
    database.aggregate(pipeline),
    database.countDocuments(matchStage.$match),
  ]);

  return {
    currentPage: page,
    totalCount: count,
    totalPage: Math.ceil(count / perPage),
    data,
  };
};

module.exports.getById = async (id) => {
  return await database.findById(id);
};
module.exports.getByQuery = async (obj) => {
  return await database.findOne(obj);
};

module.exports.findAll = async (language = DEFAULT_LOCALE) => {
  const projectFields = {
    _id: 1,
    title: `$title.${language}`,
    description: `$description.${language}`,
    image: 1,
    pdf: 1,
    rowOrder: 1,
    createdAt: 1,
    updatedAt: 1,
    status: 1,
  };

  const pipeline = [
    { $match: { status: true } },
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
      $expr: {
        $gt: ["$usageLimit", "$usedCount"],
      },
      status: true,
      coupon_status: "active",
    })
    .sort({ rowOrder: 1 });
};

module.exports.DeleteById = async (id) => {
  await database.findByIdAndDelete(id);
  const remainingRows = await database.find().sort({ rowOrder: 1 });
  const bulkOperations = remainingRows.map((row, index) => ({
    updateOne: {
      filter: { _id: row._id },
      update: { $set: { rowOrder: index + 1 } },
    },
  }));
  await database.bulkWrite(bulkOperations);
};

module.exports.getByCouponCode = async (couponCode) => {
  return await database.findOne({ couponCode });
};
