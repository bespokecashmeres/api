const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const { FetchHome } = require("./dbQuery");


exports.fetchHomeController = async (req, res) => {

  const language = req.headers["accept-language"];
  
    const data = await FetchHome(language);
    if(!data){
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.NO_STORY_FOUND),
      };
    }
    return res.json(
        success(
          httpStatusCodes.SUCCESS,
          httpResponses.SUCCESS,
          res.__(serverResponseMessage.STORY_FETCHED),
          data
        )
      );
  };