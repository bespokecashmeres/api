const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const Gender = require("../Gender/schema");
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
  const trimedSearch = search?.trim() ?? "";

  // Match Stage for Filtering and Searching
  const matchStage = {
    $match: {
      ...filter,
      ...(trimedSearch && {
        $or: [
          { [`name.${language}`]: { $regex: trimedSearch, $options: "i" } },
          { yarnId: { $regex: trimedSearch, $options: "i" } },
        ],
      }),
    },
  };

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      name: { $ifNull: [`$name.${language}`, ""] },
      image: 1,
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

module.exports.isSlugExist = async (req) => {
  return await database.findOne({slug:req});
};

