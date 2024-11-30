const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const { userCreate } = require("./dbQuery");

exports.createUserController = async (req, res) => {
  const userCreateResponse = await userCreate(req.body);
  if (!userCreateResponse) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_CREATE_USER),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_CREATED_SUCCESSFULLY),
      undefined
    )
  );
};
