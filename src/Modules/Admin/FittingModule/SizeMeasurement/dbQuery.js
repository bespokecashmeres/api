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
        value: { $regex: search, $options: "i" },
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
    {
      $lookup: {
        from: "steptypes",
        localField: "stepTypeId",
        foreignField: "_id",
        as: "stepTypeData",
      },
    },
    {
      $unwind: {
        path: "$stepTypeData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "stepcards",
        localField: "stepCardId",
        foreignField: "_id",
        as: "stepCardData",
      },
    },
    {
      $unwind: {
        path: "$stepCardData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "fittingsizes",
        localField: "fittingSizeId",
        foreignField: "_id",
        as: "fittingSizeData",
      },
    },
    {
      $unwind: {
        path: "$fittingSizeData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "sizemeasurementfields",
        localField: "sizeMeasurementFieldId",
        foreignField: "_id",
        as: "sizeMeasurementFieldData",
      },
    },
    {
      $unwind: {
        path: "$sizeMeasurementFieldData",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      value: 1,
      productType: { $ifNull: [`$productTypeData.name.${language}`, ""] },
      stepType: { $ifNull: [`$stepTypeData.name.${language}`, ""] },
      stepCard: { $ifNull: [`$stepCardData.title.${language}`, ""] },
      fittingSize: { $ifNull: [`$fittingSizeData.name.${language}`, ""] },
      sizeMeasurementField: {
        $ifNull: [`$sizeMeasurementFieldData.name.${language}`, ""],
      },
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

module.exports.getById = async (id) => {
  return await database.findById(id);
};

module.exports.getByQuery = async (obj) => {
  return await database.findOne(obj);
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
