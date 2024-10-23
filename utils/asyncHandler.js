const { serverResponseMessage } = require("../config/message");
const { httpResponses } = require("./http-responses");
const { httpStatusCodes } = require("./http-status-codes");
const { logger } = require("./logger");
const moment = require("moment");
const timeFormat = "MMMM Do YYYY, h:mm:ss a";
exports.asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            console.log("Error in Async Handler", err)
            let customError = "";
            if (err.code === "DUPLICATE_FIELD_VALUE_ERROR") {
                customError = res.__(err.message);
            }
            const resStatusCode = err.code && err.code >= 400 && err.code <= 599 ? err.code : httpStatusCodes.ERROR;
            if (err && err.stack) {
                logger.info("Async Handler Response", {
                    meta: { req, error: customError || err.message || res.__(serverResponseMessage.INTERNAL_SERVER_ERROR), time: moment(new Date()).format(timeFormat) },
                });
            }
            return res.status(httpStatusCodes.SUCCESS).json({
                code: resStatusCode,
                status: httpResponses.ERROR,
                success: false,
                message: customError || err.message || res.__(serverResponseMessage.INTERNAL_SERVER_ERROR),
            });
        });
    };
};
