const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  getPaginationData,
} = require("./dbQuery");

exports.listController = async (req, res, next) => {
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getPaginationData(req.body)
      )
    );
};
