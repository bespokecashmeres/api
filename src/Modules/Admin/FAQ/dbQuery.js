const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("./schema");
const Gender = require("../Gender/schema");
const FAQ = require("./schema");
const { ObjectId } = require("mongoose").Types;

RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.create = async (req) => {
  console.log('req inside mongo : ',req);
  return await database.create(req);
};

module.exports.findOneRecord = async (req) => {
  return await database.findOne({slug:req});
};



module.exports.GenderExist = async (_id) => {
  return await Gender.findById(_id);
};


module.exports.getPaginationData = async (qData) => {
  try {
    const {
      perPage = 10,
      page = 1,
      sortBy = "createdAt",
      sortOrder = "desc",
      search = "",
      filter = {},
      language = "en", // Default language for title and description
    } = qData;

    const trimmedSearch = search.trim();

    // Match stage for filtering and searching by title
    const matchStage = {
      $match: {
        ...filter,
        ...(trimmedSearch && {
          $or: [
            { [`title.${language}`]: { $regex: trimmedSearch, $options: "i" } },
            { [`description.${language}`]: { $regex: trimmedSearch, $options: "i" } },
          ],
        }),
      },
    };

    // Project stage to select language-specific title and description
    const projectStage = {
      $project: {
        _id: 1,
        faqId: 1,
        title: { $ifNull: [`$title.${language}`, ""] },
        description: { $ifNull: [`$description.${language}`, ""] },
        genderId: 1,
        status: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    };

    // Sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Aggregation pipeline
    const aggregationPipeline = [
      matchStage,
      projectStage,
      { $sort: sortOptions },
      { $skip: (page - 1) * perPage },
      { $limit: perPage },
    ];

    // Execute the aggregation and get the count in parallel
    const [data, totalCount] = await Promise.all([
      FAQ.aggregate(aggregationPipeline).exec(),
      FAQ.countDocuments(matchStage.$match),
    ]);

    // Return paginated data
    return {
      code: 200,
      statusCode: "SUCCESS",
      success: true,
      message: "FAQs fetched successfully",
      data: {
        currentPage: page,
        totalCount,
        totalPage: Math.ceil(totalCount / perPage),
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching paginated FAQs:", error);
    return {
      code: 500,
      statusCode: "ERROR",
      success: false,
      message: "Failed to fetch FAQs",
      error: error.message,
    };
  }
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

