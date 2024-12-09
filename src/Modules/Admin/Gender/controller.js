const { serverResponseMessage } = require("../../../../config/message");
const {
  createNameRecordHandler,
  updateNameRecordHandler,
  fetchPaginatedRecordsHandler,
  fetchRecordDetailsHandler,
  deleteRecordHandler,
  updateRecordStatusHandler,
  fetchDropdownOptionsHandler,
} = require("../../../../utils/baseController");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
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

exports.getActiveController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const activeList = await modelOperations.getActive(acceptLanguage);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        activeList
      )
    );
};
