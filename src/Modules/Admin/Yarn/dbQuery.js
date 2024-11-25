const { DEFAULT_LOCALE } = require("../../../../utils/constants");
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

module.exports.getDataForDropdown = async (language = DEFAULT_LOCALE) => {
  const pipeline = [
    { $match: { status: true } },
    {
      $project: {
        value: "$_id",
        label: {
          $concat: ["$yarnId", " ", `$name.${language}`],
        },
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

  // Match Stage for Filtering and Searching
  const matchStage = {
    $match: {
      ...filter,
      ...(search && {
        [`name.${language}`]: { $regex: search, $options: "i" },
      }),
    },
  };

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      name: { $ifNull: [`$name.${language}`, ""] },
      yarnId: 1,
      createdAt: 1,
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
  return await database.findByIdAndDelete(id);
};
