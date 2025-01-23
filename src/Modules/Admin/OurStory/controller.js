const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  OurStoryCreate,
  OurStoryUpdate,
  FindStory,
  OurStorylist,
  DeleteStory
} = require("./dbQuery");

exports.createOurStoryController = async (req, res) => {

  const ourStory = await OurStoryCreate(req.body);
  if (!ourStory) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.OUR_STORY_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.OUR_STORY_CREATED),
      ourStory
    )
  );
};

exports.updateOurStoryController = async (req, res) => {
  const {_id} = req.body;
  const isStoryExist = await FindStory(_id);
  console.log(isStoryExist);
  if(!isStoryExist){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.OUR_STORY_NOT_EXIST),
    };
  }
  const ourStory = await OurStoryUpdate(req.body);
  console.log(ourStory);
  if (!ourStory) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.OUR_STORY_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.OUR_STORY_UPDATED),
      ourStory
    )
  );
};

exports.listOurStoryController = async (req, res) => {
  
  const data = await OurStorylist();
  console.log(data);
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

exports.getOurStoryController = async (req, res) => {
  const {_id} = req.params;
  const data = await FindStory(_id);
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

exports.deleteController = async (req, res) => {
  const {_id} = req.params;
  const data = await DeleteStory(_id);
  
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
      res.__(serverResponseMessage.STORY_DELETED),
      data
    )
  );
};



