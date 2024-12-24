const {
  createNameRecordHandler,
  updateNameRecordHandler,
  fetchPaginatedRecordsHandler,
  fetchRecordDetailsHandler,
  deleteRecordHandler,
  updateRecordStatusHandler,
  fetchDropdownOptionsHandler,
} = require("../../../../../utils/baseController");
const modelOperations = require("./dbQuery");

exports.createController = async (req, res, next) => {
  return createNameRecordHandler(req, res, modelOperations);
};

exports.updateController = async (req, res, next) => {
  return updateNameRecordHandler(req, res, modelOperations);
};

exports.listController = async (req, res, next) => {
  return fetchPaginatedRecordsHandler(req, res, modelOperations);
};

exports.getDetailController = async (req, res, next) => {
  return fetchRecordDetailsHandler(req, res, modelOperations);
};

exports.deleteController = async (req, res, next) => {
  return deleteRecordHandler(req, res, modelOperations);
};

exports.statusController = async (req, res, next) => {
  return updateRecordStatusHandler(req, res, modelOperations);
};

exports.dropdownOptionsController = async (req, res, next) => {
  return fetchDropdownOptionsHandler(req, res, modelOperations);
};
