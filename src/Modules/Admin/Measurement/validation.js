const database = require("./schema");
const { ObjectId } = require("mongoose").Types;

module.exports.createMeasurement = async (req) => {
  return await database.create(req);
};


module.exports.updateMeasurement = async (data) => {
  const { user_id, ...measurementData } = data;

  const result = await database.findOneAndUpdate(
    { user_id },
    { $set: measurementData },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  return result;
};

module.exports.getMeasurementByUserId = async (id) => {
  return await database.findOne({ user_id: new ObjectId(id) });
};
