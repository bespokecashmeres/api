const database = require("./schema");
const { ObjectId } = require("mongoose").Types;
RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.getUserById = async (id, projection = {}) => {
  return await database.findById(id, projection);
};

module.exports.getActiveUsers = async (user_type = "user") => {
  return await database.find({
    status: true,
    user_type: user_type,
  });
};

module.exports.getUserProfileById = async (id) => {
  const pipeline = [
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
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
    {
      $project: {
        _id: 1,
        first_name: 1,
        middle_name: 1,
        last_name: 1,
        mobile_number: 1,
        height: 1,
        weight: 1,
        email: 1,
        country_id: 1,
        isMeasurementAdded: 1,
        gender: 1,
      },
    },
  ];

  const result = await database.aggregate(pipeline);

  const document = result.length > 0 ? result[0] : null;

  return document;
};

module.exports.getUserAndMeasurementById = async (id) => {
  const pipeline = [
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "measurements",
        localField: "_id",
        foreignField: "user_id",
        as: "measurement_info",
      },
    },
    {
      $unwind: {
        path: "$measurement_info",
        preserveNullAndEmptyArrays: true,
      },
    },
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
    {
      $project: {
        _id: 1,
        first_name: 1,
        middle_name: 1,
        last_name: 1,
        mobile_number: 1,
        email: 1,
        height: 1,
        weight: 1,
        country_id: 1,
        isMeasurementAdded: 1,
        gender: 1,
        measurements: {
          $ifNull: ["$measurement_info.measurements", []],
        },
      },
    },
  ];

  const result = await database.aggregate(pipeline);

  const document = result.length > 0 ? result[0] : null;

  return document;
};

module.exports.getWsById = async (id) => {
  const pipeline = [
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $project: {
        _id: 1,
        first_name: 1,
        middle_name: 1,
        last_name: 1,
        mobile_number: 1,
        email: 1,
        country_id: 1,
        gender: 1,
      },
    },
  ];

  const result = await database.aggregate(pipeline);

  const document = result.length > 0 ? result[0] : null;

  return document;
};

module.exports.getAllUsersByAdmin = async (qData, user_type = "user") => {
  const {
    perPage,
    page,
    sortBy = "createdAt",
    sortOrder = "desc",
    search = "",
    filter = {}
  } = qData;
  let searchQuery = { ...filter, user_type: { $eq: user_type } };
  if (search) {
    searchQuery["$or"] = [
      { first_name: { $regex: new RegExp(search, "i") } },
      { last_name: { $regex: new RegExp(search, "i") } },
      { middle_name: { $regex: new RegExp(search, "i") } },
      { email: { $regex: new RegExp(search, "i") } },
      { mobile_number: { $regex: new RegExp(search, "i") } },
    ];
  }

  const sortOptions = {};
  if (sortBy) {
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  }

  const pipeline = [
    {
      $match: searchQuery,
    },
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
    {
      $sort: {
        ...sortOptions,
      },
    },
    {
      $project: {
        _id: 1,
        phoneCode: {
          $ifNull: ["$country_info.phoneCode", ""],
        },
        first_name: 1,
        last_name: 1,
        middle_name: 1,
        email: 1,
        mobile_number: 1,
        createdAt: 1,
        status: 1,
      },
    },
  ];

  const count = (await database.aggregate(pipeline))?.length;

  pipeline.push(
    {
      $skip: (Number(page) - 1) * Number(perPage),
    },
    {
      $limit: Number(perPage),
    }
  );

  const data = await database.aggregate(pipeline);

  return {
    currentPage: page,
    totalCount: count,
    totalPage: count ? Math.ceil(count / perPage) : 0,
    data,
  };
};

module.exports.userCreate = async (req) => {
  return await database.create(req);
};

module.exports.findByEmail = async (email) => {
  return await database.findOne({ email });
};

module.exports.userUpdate = async (userId, data) => {
  return await database
    .findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: { ...data } },
      {
        new: true,
      }
    )
    .lean();
};
