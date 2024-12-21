const {
  createNameRecordHandler,
  updateNameRecordHandler,
  fetchPaginatedRecordsHandler,
  fetchRecordDetailsHandler,
  deleteRecordHandler,
  updateRecordStatusHandler,
  fetchDropdownOptionsHandler,
  checkRecordDoesNotExists,
} = require("../../../../../utils/baseController");
const modelOperations = require("./dbQuery");
const { findOneRecord: yarnFindRecord } = require("../../Yarn/dbQuery");
const { httpStatusCodes } = require("../../../../../utils/http-status-codes");
const { serverResponseMessage } = require("../../../../../config/message");
const { ObjectId } = require("mongoose").Types;

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

const getDeleteOrStatusStatuses = async (patternId, checkStatus = false) => {
  const isYarn = await yarnFindRecord({
    patternId: new ObjectId(patternId),
    ...(checkStatus ? { status: true } : {}),
  });
  return { isYarn };
};

exports.deleteController = async (req, res, next) => {
  const { _id } = req.params;
  await checkRecordDoesNotExists(_id, res, modelOperations);
  const { isYarn } = await getDeleteOrStatusStatuses(_id);

  if (isYarn) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(
        serverResponseMessage.PLEASE_DELETE_YARN_TO_DELETE_PATTERN
      ),
    };
  }

  return deleteRecordHandler(req, res, modelOperations, true);
};

exports.statusController = async (req, res, next) => {
  const { _id } = req.body;
  await checkRecordDoesNotExists(_id, res, modelOperations);
  const { isYarn } = await getDeleteOrStatusStatuses(_id, true);

  if (isYarn) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(
        serverResponseMessage.PLEASE_DISABLE_YARN_TO_DISABLE_PATTERN
      ),
    };
  }

  return updateRecordStatusHandler(req, res, modelOperations, true);
};

exports.dropdownOptionsController = async (req, res, next) => {
  return fetchDropdownOptionsHandler(req, res, modelOperations);
};
