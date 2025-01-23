const database = require("./schema");



module.exports.OurStoryCreate = async (req) => {
  return await database.create(req);
};

module.exports.FindStory = async (_id) => {
  return await database.findById(_id);
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


