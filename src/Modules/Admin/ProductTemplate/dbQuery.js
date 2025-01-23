const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("./schema");
const { ObjectId } = require("mongoose").Types;

module.exports.create = async (req) => {
  return await database.create(req);
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
        [`title.${language}`]: { $regex: trimedSearch, $options: "i" }
      }),
    },
  };

  // Project Stage for Translating Fields
  // const projectStage = {
  //   $project: {
  //     _id: 1,
  //     title: { $ifNull: [`$title.${language}`, ""] },
  //     image: 1,
  //     createdAt: 1,
  //     status: 1,
  //     yarn: 1,
  //     steps: 1,
  //   },
  // };

  // Lookup Stage for Step Types
  const lookupStage = {
    $lookup: {
      from: "steptypes",
      localField: "steps.stepType",
      foreignField: "_id",
      as: "stepTypes"
    }
  };

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      title: { $ifNull: [`$title.${language}`, ""] },
      image: 1,
      createdAt: 1,
      status: 1,
      yarn: 1,
      steps: {
        $map: {
          input: "$steps",
          as: "step",
          in: {
            $mergeObjects: [
              "$$step",
              {
                stepType: {
                  $let: {
                    vars: {
                      matchedType: {
                        $first: {
                          $filter: {
                            input: "$stepTypes",
                            cond: { $eq: ["$$this._id", "$$step.stepType"] }
                          }
                        }
                      }
                    },
                    in: "$$matchedType.slug"
                  }
                }
              }
            ]
          }
        }
      }
    },
  };

  // Sort Options
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

  // Aggregation Query
  const aggregationPipeline = [
    matchStage,
    lookupStage,
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
  const matchStage = {
    $match: {
      _id: new ObjectId(id),
    },
  };

  const projectStage = {
    $project: {
      _id: 1,
      title: 1,
      image: 1,
      contents: 1,
      yarn: 1,
      steps: 1,
      productTypeId: 1,
      status: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  };

  const result = await database.aggregate([
    matchStage,
    projectStage,
  ]).exec();

  return result.length ? result[0] : null;
};

module.exports.update = async (data) => {
  return await database
    .findOneAndUpdate(
      { _id: new ObjectId(data._id) },
      { $set: { ...data } },
      { new: true }
    )
    .lean();
};

module.exports.deleteById = async (id) => {
  return await database.findByIdAndDelete(id);
};

module.exports.updateStatus = async (id, status) => {
  return await database
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { status } },
      { new: true }
    )
    .lean();
};