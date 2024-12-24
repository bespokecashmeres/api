const { serverResponseMessage } = require("../config/message");
const { generateDynamicQuery } = require("./common");
const { httpResponses } = require("./http-responses");
const { httpStatusCodes } = require("./http-status-codes");
const { success } = require("./response");

const checkRecordDoesNotExists = async (_id, res, modelOperations) => {
  const existingRecord = await modelOperations.getById(_id);

  if (!existingRecord) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }
  return existingRecord;
};

exports.checkRecordDoesNotExists = checkRecordDoesNotExists;

exports.createNameRecordHandler = async (
  req,
  res,
  modelOperations,
  options = {}
) => {
  const { parseField = "name", uniqueField = "name" } = options;

  try {
    req.body[parseField] = req.body[parseField]
      ? JSON.parse(req.body[parseField])
      : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }

  const query = generateDynamicQuery(req.body[parseField], uniqueField);
  const isExist = await modelOperations.findOneRecord(query);

  if (isExist) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_ALREADY_EXISTS),
    };
  }

  const record = await modelOperations.create(req.body);
  return res
    .status(httpStatusCodes.CREATED)
    .json(
      success(
        httpStatusCodes.CREATED,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_CREATED),
        record
      )
    );
};

exports.updateNameRecordHandler = async (
  req,
  res,
  modelOperations,
  options = {}
) => {
  const { parseField = "name", uniqueField = "name" } = options;
  const { _id } = req.body;
  await checkRecordDoesNotExists(_id, res, modelOperations);

  try {
    req.body[parseField] = req.body[parseField]
      ? JSON.parse(req.body[parseField])
      : [];
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }

  const query = generateDynamicQuery(
    req.body[parseField],
    uniqueField,
    req.body._id
  );
  const isExist = await modelOperations.findOneRecord(query);

  if (isExist) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_ALREADY_EXISTS),
    };
  }

  const updatedRecord = await modelOperations.Update(req.body);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED),
        updatedRecord
      )
    );
};

exports.fetchRecordDetailsHandler = async (req, res, modelOperations) => {
  const { _id } = req.params;
  const record = await checkRecordDoesNotExists(_id, res, modelOperations);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        record
      )
    );
};

exports.deleteRecordHandler = async (
  req,
  res,
  modelOperations,
  ignoreNotExistsCheck = false
) => {
  const { _id } = req.params;
  if (!ignoreNotExistsCheck) {
    await checkRecordDoesNotExists(_id, res, modelOperations);
  }

  await modelOperations.DeleteById(_id);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_DELETED)
      )
    );
};

exports.updateRecordStatusHandler = async (
  req,
  res,
  modelOperations,
  ignoreNotExistsCheck = false
) => {
  const { _id, status } = req.body;
  if (!ignoreNotExistsCheck) {
    await checkRecordDoesNotExists(_id, res, modelOperations);
  }

  await modelOperations.Update({ _id, status: !!status });
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED)
      )
    );
};

exports.fetchDropdownOptionsHandler = async (req, res, modelOperations) => {
  const acceptLanguage = req.headers["accept-language"];
  const data = await modelOperations.getDataForDropdown(acceptLanguage);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        data
      )
    );
};

exports.fetchPaginatedRecordsHandler = async (
  req,
  res,
  modelOperations,
  options = {}
) => {
  const acceptLanguage = req.headers["accept-language"];
  const queryOptions = {
    language: acceptLanguage,
    ...req.body,
    ...options,
  };

  const data = await modelOperations.getPaginationData(queryOptions);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        data
      )
    );
};
