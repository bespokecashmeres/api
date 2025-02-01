const { default: mongoose } = require("mongoose");
const database = require("./schema");
const { DEFAULT_LOCALE } = require("../../../../utils/constants");



module.exports.OurStoryCreate = async (req) => {
  return await database.create(req);
};

module.exports.FindStory = async (id) => {
  return await database.findById(_id);
};

module.exports.FindStoryData = async (id,language=DEFAULT_LOCALE) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid ObjectId:", id);
      return null;
    }

    const [data] = await database.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) },      },
      {
        $project: {
          title: { $ifNull: [`$title.${language}`, `$title.en`] },
          description: { $ifNull: [`$description.${language}`, `$description.en`] },
          my_stories: {
            $map: {
              input: "$my_stories",
              as: "story",
              in: {
                uuid: "$$story.uuid",
                image: "$$story.image",
                title: { $ifNull: [`$$story.title.${language}`, `$$story.title.en`] },
                description: { $ifNull: [`$$story.description.${language}`, `$$story.description.en`] },
              },
            },
          },
        },
      },
    ]);

    return data || null;
  } catch (error) {
    console.error("Error fetching story:", error);
    throw error;
  }};

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


// module.exports.getPaginationData = async (qData) => {
//   const {
//     perPage,
//     page,
//     sortBy = "createdAt",
//     sortOrder = "desc",
//     search = "",
//     filter = {},
//     language = DEFAULT_LOCALE,
//   } = qData;
//   const trimedSearch = search?.trim() ?? "";

//   // Match Stage for Filtering and Searching
//   const matchStage = {
//     $match: {
//       ...filter,
//       ...(trimedSearch && {
//         $or: [
//           { [`title.${language}`]: { $regex: trimedSearch, $options: "i" } },
//           { status: { $regex: trimedSearch, $options: "i" } },
//         ],
//       }),
//     },
//   };

//   // Project Stage for Translating Fields
//   const projectStage = {
//     $project: {
//       _id: 1,
//       bg_image: 1,
//       thumb_image: 1,
//       title:1,
//       createdAt: 1,
//       updatedAt: 1,
//       status: 1,
//     },
//   };

//   // Sort Options
//   const sortOptions = {};
//   sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

//   // Aggregation Query
//   const aggregationPipeline = [
//     matchStage,
//     projectStage,
//     { $sort: sortOptions },
//     { $skip: (page - 1) * perPage },
//     { $limit: perPage },
//   ];

//   // Execute the Aggregation
//   const [data, totalCount] = await Promise.all([
//     database.aggregate(aggregationPipeline).exec(),
//     database.countDocuments(matchStage.$match),
//   ]);

//   console.log("final data : ",data);

//   // Return Paginated Data
//   return {
//     currentPage: page,
//     totalCount,
//     totalPage: Math.ceil(totalCount / perPage),
//     data,
//   };
// };


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


  const trimmedSearch = search?.trim() ?? "";


  // Match Stage for Filtering and Searching
  const matchStage = {
    $match: {
      ...filter,
      ...(trimmedSearch && {
        $or: [
          { [`title.${language}`]: { $regex: trimmedSearch, $options: "i" } },
          { [`sub_title.${language}`]: { $regex: trimmedSearch, $options: "i" } },
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
      createdAt: 1,
      updatedAt: 1,
      status: 1,
      title: { $getField: { field: language, input: "$title" } },
      sub_title: { $getField: { field: language, input: "$sub_title" } },
    },
  };

  // Sort Options
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

  // Aggregation Pipeline
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

  // Return the Paginated Data
  const datas = {
    currentPage: page,
    totalCount,
    totalPage: Math.ceil(totalCount / perPage),
    data,
  };
  return datas;
};
