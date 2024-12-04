const { ObjectId } = require("mongoose").Types;

module.exports.createRecord = async (database, data) => {
  return await database.create(data);
};

module.exports.findOneRecord = async (database, query) => {
  return await database.findOne(query);
};

module.exports.getRecordById = async (database, id) => {
  return await database.findById(id);
};

module.exports.updateRecordById = async (database, data) => {
  return await database
    .findOneAndUpdate(
      { _id: new ObjectId(data._id) },
      { $set: { ...data } },
      { new: true }
    )
    .lean();
};

module.exports.deleteRecordById = async (database, id) => {
  return await database.findByIdAndDelete(id);
};

module.exports.getDropdownDataForNameField = async (database, language, match = { status: true }) => {
  const pipeline = [
    { $match: match },
    {
      $project: {
        value: "$_id",
        label: `$name.${language}`,
        _id: 0,
      },
    },
  ];
  return await database.aggregate(pipeline);
};

module.exports.getPaginatedDataForNameField = async (database, queryData) => {
  const {
    perPage,
    page,
    sortBy = "createdAt",
    sortOrder = "desc",
    search = "",
    filter = {},
    language,
  } = queryData;

  const matchStage = {
    $match: {
      ...filter,
      ...(search && {
        [`name.${language}`]: { $regex: search, $options: "i" },
      }),
    },
  };

  const projectStage = {
    $project: {
      _id: 1,
      name: { $ifNull: [`$name.${language}`, ""] },
      createdAt: 1,
      updatedAt: 1,
      status: 1,
    },
  };

  const sortOptions = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

  const pipeline = [
    matchStage,
    projectStage,
    { $sort: sortOptions },
    { $skip: (page - 1) * perPage },
    { $limit: perPage },
  ];

  const [data, totalCount] = await Promise.all([
    database.aggregate(pipeline),
    database.countDocuments(matchStage.$match),
  ]);

  return {
    currentPage: page,
    totalCount,
    totalPage: Math.ceil(totalCount / perPage),
    data,
  };
};
