const baseQueryService = require("../../../../utils/baseQueryService");
const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("./schema");

module.exports.create = async (data) => {
  return await baseQueryService.createRecord(database, data);
};

module.exports.findOneRecord = async (query) => {
  return await baseQueryService.findOneRecord(database, query);
};

module.exports.getDataForDropdown = async (language = DEFAULT_LOCALE) => {
  return await baseQueryService.getDropdownDataForNameField(database, language);
};

module.exports.getPaginationData = async (queryData) => {
  return await baseQueryService.getPaginatedDataForNameField(
    database,
    queryData
  );
};

module.exports.getById = async (id) => {
  return await baseQueryService.getRecordById(database, id);
};

module.exports.Update = async (data) => {
  return await baseQueryService.updateRecordById(database, data);
};

module.exports.DeleteById = async (id) => {
  return await baseQueryService.deleteRecordById(database, id);
};

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

module.exports.getActive = async (language = DEFAULT_LOCALE) => {
  return await database.aggregate([
    {
      $match: { status: true },
    },
    {
      $project: {
        _id: 1,
        name: `$name.${language}`,
      },
    },
  ]);
};
