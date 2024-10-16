"use strict";
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");
const { httpStatusCodes } = require("../utils/http-status-codes");
const { httpResponses } = require("../utils/http-responses");
const { serverResponseMessage } = require("../config/message");

// module.exports.verifyToken = () => {
//   return (req, res, next) => {
exports.verifyToken = function (req, res, next) {
  const token = req.headers["authorization"];
  const result = token ? token.substr(token.indexOf(" ") + 1) : false;
  if (!result) {
    return res.status(httpStatusCodes.SUCCESS).send({
      status: false,
      code: httpStatusCodes.UNAUTHORIZED,
      statusCode: httpResponses.SESSION_EXPIRE,
      message: res.__(serverResponseMessage.SESSION_EXPIRE),
    });
  }
  jwt.verify(result, config.jwtSecretKey, async (err, decoded) => {
    if (err) {
      return res.status(httpStatusCodes.SUCCESS).send({
        status: false,
        code: httpStatusCodes.UNAUTHORIZED,
        statusCode: httpResponses.SESSION_EXPIRE,
        message: res.__(serverResponseMessage.SESSION_EXPIRE),
      });
    }
    req.userId = decoded.userId;
    req.decodedToken = decoded;
    next();
  });
};

module.exports.generateToken = async (user) => {
  let userData = {
    userId: user._id,
    userType: user.user_type,
  };
  return jwt.sign(userData, config.jwtSecretKey, {
    expiresIn: config.jwtExpireIn,
  });
};

module.exports.generateTemporaryToken = async (obj, expiresIn = "1h") => {
  return jwt.sign(obj, config.jwtSecretKey, {
    expiresIn: expiresIn,
  });
};
