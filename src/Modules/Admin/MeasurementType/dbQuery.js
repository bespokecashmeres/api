const database = require("./schema");
const { ObjectId } = require("mongoose").Types;

module.exports.bulkCreate = async (data, uniqueField) => {
  const operations = data.map((item) => ({
    updateOne: {
      filter: { [uniqueField]: item[uniqueField] }, // Unique field to check duplicates
      update: { $set: item },
      upsert: true, // Insert if no match is found
    },
  }));
  try {
    return await database.bulkWrite(operations);
  } catch (err) {
    console.error(`Error in bulkCreate for ${Model.collection.name}:`, err);
    throw err; // Re-throw the error to handle it at a higher level if necessary
  }
};

module.exports.getById = async (id) => {
  return await database.findById(id);
};

module.exports.create = async (req) => {
  return await database.create(req);
};

module.exports.getPaginationData = async (qData) => {
  const {
    perPage,
    page,
    sortBy = "name",
    sortOrder = "asc",
    search = "",
    filter = {},
  } = qData;
  let searchQuery = { ...filter };
  if (search) {
    searchQuery["name"] = {
      $regex: new RegExp(RegExp.escape(search), "i"),
    };
  }
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  const count = await database.countDocuments(searchQuery);
  const data = await database
    .find(searchQuery)
    .sort(sortOptions)
    .limit(perPage)
    .skip((page - 1) * perPage);
  return {
    currentPage: page,
    totalCount: count,
    totalPage: Math.ceil(count / perPage),
    data,
  };
};

module.exports.Update = async (existingMeasurementType, data) => {
  // Update the name of the existing measurement type
  existingMeasurementType.name = data.name;

  // Create a new array for the updated fields
  const updatedFields = [];

  // Update fields with existing _id or insert new fields
  data.fields.forEach((field) => {
    if (field._id) {
      // Update existing field by _id
      const index = existingMeasurementType.fields.findIndex(
        (f) => f._id.toString() === field._id.toString()
      );
      if (index > -1) {
        // Update the existing field
        existingMeasurementType.fields[index].name = field.name;
        updatedFields.push(existingMeasurementType.fields[index]); // Keep the updated field
      } else {
        // If the field does not exist, add it as a new field
        updatedFields.push(field);
      }
    } else {
      // Add new field (no _id)
      updatedFields.push(field);
    }
  });

  // Replace existing fields with the updated fields
  existingMeasurementType.fields = updatedFields;

  // Save the updated document
  const updatedMeasurementType = await existingMeasurementType.save();
  return updatedMeasurementType;
};

module.exports.UpdateData = async (_id, data) => {
  return await database
    .findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { ...data } },
      {
        new: true,
      }
    )
    .lean();
};

module.exports.getActive = async () => {
  return await database
    .find({
      status: true,
    })
    .sort({ name: 1 });
};
