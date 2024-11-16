const { serverResponseMessage } = require("../config/message");
const { getUserById } = require("../src/Modules/Admin/Authentication/dbQuery");
const { httpResponses } = require("../utils/http-responses");
const { httpStatusCodes } = require("../utils/http-status-codes");
const { failure } = require("../utils/response");

exports.isUserPresent = async (req, res) => {
  const { userId } = req;
  const userDetails = await getUserById(userId);
  if (!userDetails) {
    return res.json(
      failure(
        httpStatusCodes.UNAUTHORIZED,
        httpResponses.UNAUTHORIZED,
        res.__(serverResponseMessage.USER_DOES_NOT_EXIST)
      )
    );
  }
  return userDetails;
};
