const { DEFAULT_LOCALE } = require("../../../../../utils/constants");
const database = require("./schema");
const productTypeDatabase = require("../../ProductType/schema");
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

module.exports.getTabsData = async (qData) => {
  const { productTypeId, language = DEFAULT_LOCALE } = qData;

  let prodTypeId = productTypeId;

  if (!productTypeId) {
    prodTypeId = await productTypeDatabase.findOne({ status: true });
  }

  const projectFields = {
    _id: 0,
    label: { $ifNull: [`$name.${language}`, ""] },
    value: "$_id",
    status: 1,
    rowOrder: 1
  };

  const pipeline = [
    {
      $match: {
        productTypeId: new ObjectId(prodTypeId),
      },
    },
    { $project: projectFields },
    { $sort: { rowOrder: 1 } },
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
    info: `$info.${language}`,
    rowOrder: 1,
    createdAt: 1,
    updatedAt: 1,
    status: 1,
    productTypeId: 1,
  };

  const pipeline = [
    { $match: { status: true, productTypeId: new ObjectId(productTypeId) } },
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
