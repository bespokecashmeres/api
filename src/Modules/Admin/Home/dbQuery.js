const database = require("./schema");
const OurStoryModel = require("../../Admin/OurStory/schema")



module.exports.HomeCreate = async (req) => {
  return await database.create(req);
};

module.exports.HomeExist = async () => {
  return await database.findOne({status:true});
};

module.exports.fetchOurStory = async () => {
    return await OurStoryModel.find({ status: true })
    .sort({ createdAt: -1 })  // Sort by creation date, descending
    .limit(4)
    .select("title sub_title thumb_image -_id");  // Select only specific fields
};


module.exports.FindHome = async (_id) => {
  return await database.findById(_id);
};

module.exports.DeleteHome = async (_id) => {
  return await database.findByIdAndDelete(_id);
};

module.exports.HomeUpdate = async (data) => {

  console.log("step Z");
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


