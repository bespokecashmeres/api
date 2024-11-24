const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const fabrics = require("./schema");
const database = fabrics;
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

module.exports.getOptionsForDropdown = async (language = DEFAULT_LOCALE) => {
  const pipeline = [
    { $match: { status: true } },
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
    {
      $project: {
        value: "$_id",
        label: { $ifNull: [`$productTypeData.name.${language}`, ""] },
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

  const matchStage = {
    $match: {
      ...filter,
    },
  };

  const lookupStage = {
    $lookup: {
      from: "producttypes",
      localField: "productTypeId",
      foreignField: "_id",
      as: "productTypeData",
    },
  };

  const unwindStage = {
    $unwind: {
      path: "$productTypeData",
      preserveNullAndEmptyArrays: true,
    },
  };

  const searchMatchStage = {
    $match: {
      ...(search && {
        [`productTypeData.name.${language}`]: { $regex: search, $options: "i" },
      }),
    },
  };

  const projectStage = {
    $project: {
      _id: 1,
      status: 1,
      productType: { $ifNull: [`$productTypeData.name.${language}`, ""] },
    },
  };

  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

  const aggregationPipeline = [
    matchStage,
    lookupStage,
    unwindStage,
    searchMatchStage,
    projectStage,
    { $sort: sortOptions },
    { $skip: (page - 1) * perPage },
    { $limit: perPage },
  ];

  const [data, totalCount] = await Promise.all([
    database.aggregate(aggregationPipeline).exec(),
    database.countDocuments(matchStage.$match),
  ]);

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
