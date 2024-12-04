const baseQueryService = require("../../../../../utils/baseQueryService");
const { DEFAULT_LOCALE } = require("../../../../../utils/constants");
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
  return await baseQueryService.getPaginatedDataForNameField(database, queryData);
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