const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("./schema");
RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.userCreate = async (req) => {
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

  const matchStage = {
    $match: {
      ...filter,
      ...(search && {
        [`$or`]: [
          { first_name: { $regex: new RegExp(search, "i") } },
          { last_name: { $regex: new RegExp(search, "i") } },
          { mobile_number: { $regex: new RegExp(search, "i") } },
          { email: { $regex: new RegExp(search, "i") } },
        ],
      }),
    },
  };

  const projectFields = {
    _id: 1,
    first_name: 1,
    last_name: 1,
    email: 1,
    status: 1,
    mobile_number: {
      $concat: [
        { $ifNull: ["$country_info.phoneCode", ""] },
        " ",
        { $ifNull: ["$mobile_number", ""] },
      ],
    },
    gender: {
      $ifNull: [`$genderInfo.name.${language}`, ""],
    },
  };

  const sortStage = {
    $sort: { [sortBy]: sortOrder === "desc" ? -1 : 1 },
  };

  const skipLimitStage = [{ $skip: (page - 1) * perPage }, { $limit: perPage }];

  const pipeline = [
    matchStage,
    {
      $lookup: {
        from: "genders",
        localField: "gender_id",
        foreignField: "_id",
        as: "genderInfo",
      },
    },
    { $unwind: { path: "$genderInfo", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "countries",
        localField: "country_id",
        foreignField: "_id",
        as: "country_info",
      },
    },
    {
      $unwind: {
        path: "$country_info",
        preserveNullAndEmptyArrays: true,
      },
    },
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
