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
      price: 1,
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

module.exports.getCardListPaginationData = async (qData) => {
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
      ...(trimedSearch && {
        $or: [
          { [`name.${language}`]: { $regex: trimedSearch, $options: "i" } },
          { yarnId: { $regex: trimedSearch, $options: "i" } },
        ],
      }),
      status: true,
    },
  };

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      name: { $ifNull: [`$name.${language}`, ""] },
      image: 1,
      price: 1,
      yarnId: 1,
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

module.exports.getDetailsById = async (id, language) => {
  const matchStage = {
    $match: {
      _id: new ObjectId(id),
    },
  };

  const projectStage = {
    $project: {
      _id: 1,
      name: { $ifNull: [`$name.${language}`, ""] },
      material: {
        $ifNull: [`$materialInfo.name.${language}`, ""],
      },
      seasonality: {
        $ifNull: [`$seasonalityInfo.name.${language}`, ""],
      },
      colour: {
        $ifNull: [`$colourInfo.name.${language}`, ""],
      },
      perceivedWeight: {
        $ifNull: [`$perceivedWeightInfo.name.${language}`, ""],
      },
      image: 1,
      price: 1,
      yarnId: 1,
      yarns: {
        $map: {
          input: "$yarns",
          as: "yarn",
          in: {
            image: {
              $ifNull: [`$$yarn.image`, ""],
            },
            name: {
              $ifNull: [`$$yarn.name.${language}`, ""],
            },
            value: {
              $ifNull: [`$$yarn.value.${language}`, ""],
            },
            info: {
              $ifNull: [`$$yarn.info.${language}`, ""],
            },
          },
        },
      },
    },
  };

  const aggregationPipeline = [
    matchStage,
    {
      $lookup: {
        from: "colours",
        localField: "colourId",
        foreignField: "_id",
        as: "colourInfo",
      },
    },
    { $unwind: { path: "$colourInfo", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "seasonalities",
        localField: "seasonalityId",
        foreignField: "_id",
        as: "seasonalityInfo",
      },
    },
    { $unwind: { path: "$seasonalityInfo", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "perceivedweights",
        localField: "perceivedWeightId",
        foreignField: "_id",
        as: "perceivedWeightInfo",
      },
    },
    {
      $unwind: {
        path: "$perceivedWeightInfo",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "materials",
        localField: "materialId",
        foreignField: "_id",
        as: "materialInfo",
      },
    },
    { $unwind: { path: "$materialInfo", preserveNullAndEmptyArrays: true } },
    projectStage,
  ];

  const result = await database.aggregate(aggregationPipeline).exec();
  return result.length ? result[0] : null;
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
