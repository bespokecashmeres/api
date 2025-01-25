const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  OurStoryCreate,
  OurStoryUpdate,
  FindStory,
  OurStorylist,
  DeleteStory,
  getPaginationData,
  UpdateStatus
} = require("./dbQuery");
const { uploadToS3 } = require("../../../../utils/fileUploads");

exports.createOurStoryController = async (req, res) => {

  if (req.files) {
    const image = req.files?.["bg_image"] ? req.files["bg_image"][0] : null;
    if (image) {
      try {
        req.body.bg_image = await uploadToS3(image, "story");
      } catch (error) {
        console.error("Story Image upload failed:", error);
      }
    }
  }

  if (req.files) {
    const image = req.files?.["thumb_image"] ? req.files["thumb_image"][0] : null;
    if (image) {
      try {
        req.body.thumb_image = await uploadToS3(image, "story");
      } catch (error) {
        console.error("Story Image upload failed:", error);
      }
    }
  }

  if(req.files){
    const imageUploadPromise = [];
    if (req.body?.my_stories?.length) {
      for (const [index, story] of req.body?.my_stories?.entries()) {
        if (req.files[`my_stories[${index}][image]`]) {
          const singleImageFile = req.files[`my_stories[${index}][image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "my_stories").then((imageUrl) => {
                  story.image = imageUrl;
                })
              );
            }
          } catch (err) {
            console.error("Stories Images upload failed:", err);
          }
        }
      }
    }
    if (imageUploadPromise.length) {
      try {
        await Promise.allSettled(imageUploadPromise).then();
      } catch (err) {
        console.log("imageUploadPromise error", err);
      }
    }

  }


  const ourStory = await OurStoryCreate(req.body);
  if (!ourStory) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.STORY_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.STORY_CREATED),
      ourStory
    )
  );
};

exports.updateOurStoryController = async (req, res) => {
  const {_id} = req.body;
  const isStoryExist = await FindStory(_id);
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

  const acceptLanguage = req.headers["accept-language"];

  
  const data = await OurStorylist();
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
      await getPaginationData({ language: acceptLanguage, ...req.body })
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

exports.statusController = async (req, res) => {
  const data = await UpdateStatus(req.body);
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
      res.__(serverResponseMessage.STORY_UPDATED),
      undefined
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



