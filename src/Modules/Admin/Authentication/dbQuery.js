const user = require("../Users/schema");
const { ObjectId } = require("mongoose").Types;
RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.userFind = async (req) => {
  return await user.findOne(req);
};
module.exports.getUserById = async (id) => {
  return await user.findById(id);
};

module.exports.getUserData = async (data) => {
  const pipeline = [
    {
      $match: data,
    },
    {
      $lookup: {
        from: "measurements",
        localField: "_id",
        foreignField: "user_id",
        as: "results",
      },
    },
    {
      $unwind: {
        path: "$results",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        measurements: {
          $map: {
            input: { $ifNull: ["$results.measurements", []] },
            as: "measurement_types",
            in: "$$measurement_types._id"
          }
        }
      },
    },
    {
      $unset: "results",
    },
  ];

  const result = await user.aggregate(pipeline);
  const document = result.length > 0 ? result[0] : null;
  // Return the document or handle the case where it's null
  return document;
};

module.exports.UpdateData = async (req, data) => {
  return await user
    .findOneAndUpdate(
      { _id: new ObjectId(req._id) },
      { $set: { ...data } },
      {
        new: true,
      }
    )
    .lean();
};
