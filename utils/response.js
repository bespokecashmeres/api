"use strict";

const { logger } = require("./logger");
const moment = require("moment");
const { timeFormat } = require("../config/config");
const { serverResponseMessage } = require("../config/message");
const { httpStatusCodes } = require("./http-status-codes");

exports.success = function (code, status, message, data) {
  const SucessResponse = {
    code: code,
    statusCode: status,
    status : true,
    message: message,
    data: data,
  };
  logger.info("API Success Response", {
    meta: { data: SucessResponse, time: moment(new Date()).format(timeFormat) },
  });
  return SucessResponse;
};

exports.failure = function (code, status, message, data) {
  const FailureResponse = {
    code: code,
    statusCode: status,
    message: message,
    data: data,
  };
  logger.error("API Failure Response", {
    meta: {
      data: FailureResponse,
      time: moment(new Date()).format(timeFormat),
    },
  });
  return FailureResponse;
};

exports.error = function (code = httpStatusCodes.INTERNAL_SERVER_ERROR, status, message = serverResponseMessage.INTERNAL_SERVER_ERROR, data) {
  const ErrorResponse = {
    code: code,
    statusCode: status,
    message: message,
    data: data,
  };
  logger.error("API Error Response", {
    meta: {
      data: ErrorResponse,
      time: moment(new Date()).format(timeFormat),
    },
  });
  return ErrorResponse;
};
