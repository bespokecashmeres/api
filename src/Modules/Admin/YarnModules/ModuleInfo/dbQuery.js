const { DEFAULT_LOCALE } = require("../../../../../utils/constants");
const database = require("./schema");
const { ObjectId } = require("mongoose").Types;

RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.create = async (req) => {
  return await database.create(req);
};
module.exports.findOneRecord = async (req) => {
  return await database.findOne(req);
};
module.exports.findRecord = async (req) => {
  return await database.find(req);
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
    $match: {
      ...filter,
      ...(search && {
        type: { $regex: search, $options: "i" },
      }),
    },
  };

  const projectFields = {
    _id: 1,
    name: { $ifNull: [`$info.${language}`, ""] },
    type: 1,
    image: 1,
    status: 1,
  };

  const sortStage = {
    $sort: { [sortBy]: sortOrder === "desc" ? -1 : 1 },
  };

  const skipLimitStage = [{ $skip: (page - 1) * perPage }, { $limit: perPage }];

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
    info: `$info.${language}`,
    image: 1,
    type: 1,
    status: 1,
  };

  const pipeline = [{ $match: { status: true } }, { $project: projectFields }];

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
  await database.findByIdAndDelete(id);
};

