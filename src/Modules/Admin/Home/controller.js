const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  FindStory,
  HomeCreate,
  HomeUpdate,
  FindHome,
  DeleteHome
} = require("./dbQuery");

exports.CreateHomeCtrl = async (req, res) => {
  console.log("hello Home")
  const data = await HomeCreate(req.body);
  if (!data) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.HOME_CREATED),
      data
    )
  );
};

exports.UpdateHomeCtrl = async (req, res) => {
  const {_id} = req.body;
  const isStoryExist = await FindHome(_id);
  console.log(isStoryExist);
  if(!isStoryExist){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_NOT_EXIST),
    };
  }
  const data = await HomeUpdate(req.body);
  if (!data) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.HOME_UPDATED),
      data
    )
  );
};



exports.GetHomeCtrl = async (req, res) => {
  const {_id} = req.params;
  const data = await FindHome(_id);
  if(!data){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_NOT_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.HOME_FETCHED),
      data
    )
  );
};

exports.deleteHomeCtrl = async (req, res) => {
  const {_id} = req.params;
  const data = await DeleteHome(_id);
  
  if(!data){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_NOT_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.HOME_DELETED),
      data
    )
  );
};
