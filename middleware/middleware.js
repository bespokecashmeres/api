"use strict";
const { serverResponseMessage } = require("../config/message");
const { httpResponses } = require("../utils/http-responses");
const { httpStatusCodes } = require("../utils/http-status-codes");
const response = require("../utils/response");
const validation = (schema) => {
  return async (req, res, next) => {
    let reqData = { ...req.body };
    if (Object.keys(req.params).length) reqData = { ...reqData, ...req.params };
    if (Object.keys(req.query).length) reqData = { ...reqData, ...req.query };
    if (req.file) reqData = { ...reqData, image: req.file}

    const { error } = schema.validate(reqData);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      console.log("error: ", error);
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      // res.status(422).json(response.failure(422, message));
      const data = {
        error: message,
      };
      console.log("data: ", data);
      return res.json(
        response.failure(
          httpStatusCodes.BAD_REQUEST,
          httpResponses.BAD_REQUEST,
          serverResponseMessage.UNABLE_TO_VERIFY_REQUEST_DATA,
          data
        )
      );
    }
  };
};

module.exports = validation;
