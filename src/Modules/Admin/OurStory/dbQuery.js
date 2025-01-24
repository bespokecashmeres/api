const database = require("./schema");



module.exports.OurStoryCreate = async (req) => {
  return await database.create(req);
};

module.exports.FindStory = async (_id) => {
  return await database.findById(_id);
};

module.exports.UpdateStatus = async (data) => {
  return await database.findByIdAndUpdate(data._id,{
    status:data.status
  },{new:true});

};


module.exports.DeleteStory = async (_id) => {
  return await database.findByIdAndDelete(_id);
};

module.exports.OurStoryUpdate = async (data) => {
  console.log("data",data)
  return await database
    .findOneAndUpdate(
      { _id: data._id },
      { $set: { ...data } },
      {
        new: true,
      }
    )
    .lean();
};

module.exports.OurStorylist = async (req) => {
  return await database.find({status:true});
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
          // { yarnId: { $regex: trimedSearch, $options: "i" } },
        ],
      }),
    },
  };

  // Project Stage for Translating Fields
  const projectStage = {
    $project: {
      _id: 1,
      bg_image: 1,
      thumb_image: 1,
      title:1,
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

