
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
    getActive,
} = require("./dbQuery");


exports.getActiveController = async (req, res, next) => {
    const activeList = await getActive();
    return res.status(httpStatusCodes.SUCCESS).json(
        success(
            httpStatusCodes.SUCCESS,
            httpResponses.SUCCESS,
            res.__(serverResponseMessage.RECORD_FETCHED),
            activeList
        )
    );
};