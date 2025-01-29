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


  if(req.body?.title){
    try {
      req.body.title = req.body.title ? JSON.parse(req.body.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.sub_title){
    try {
      req.body.sub_title = req.body.sub_title ? JSON.parse(req.body.sub_title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body.description){
    try {
      req.body.description = req.body.description ? JSON.parse(req.body.description) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

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


   if (req.body?.my_stories?.length) {
    for (const [index, story] of req.body.my_stories.entries()) {
      if (story.title) {
        story.title = JSON.parse(story.title);
      }
      if (story.description) {
        story.description = JSON.parse(story.description);
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
  const isExist = await FindStory(_id);
  if(!isExist){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.OUR_STORY_NOT_EXIST),
    };
  }


  if(req.body?.title){
    try {
      req.body.title = req.body.title ? JSON.parse(req.body.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.sub_title){
    try {
      req.body.sub_title = req.body.sub_title ? JSON.parse(req.body.sub_title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

 if(req.body?.description){
  try {
    req.body.description = req.body.description ? JSON.parse(req.body.description) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

  const deletedImages = []; // Store URLs of images to delete

  // Process the main image
  if (req.files?.bg_image) {
    const image = req.files["bg_image"][0];
    try {
      const imageUrl = await uploadToS3(image, "story");
      req.body.bg_image = imageUrl;
      console.log("image URL",imageUrl);
      if (isExist?.bg_image) {
        deletedImages.push(isExist.bg_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.bg_image = isExist?.bg_image || "";
  }

  if (req.files?.thumb_image) {
    const image = req.files["thumb_image"][0];
    try {
      const imageUrl = await uploadToS3(image, "story");
      req.body.thumb_image = imageUrl;
      console.log("image URL",imageUrl);
      if (isExist?.thumb_image) {
        deletedImages.push(isExist.thumb_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.thumb_image = isExist?.thumb_image || "";
  }



  const imageUploadPromise = [];
  if (req.body?.my_stories?.length) {
    for (const [index, story] of req.body?.my_stories?.entries()) {
      const newImage = req.files?.[`my_stories[${index}][image]`]?.[0];
      console.log("new Image :",newImage);
      if (newImage) {
        try {
          imageUploadPromise.push(
            uploadToS3(newImage, "story").then((imageUrl) => {
              story.image = imageUrl;
            })
          );
          const oldImageUrl = isExist?.my_stories?.[index]?.image;
          if (oldImageUrl) {
            deletedImages.push(oldImageUrl);
          }
        } catch (err) {
          console.error("Our Story Images upload failed:", err);
        }
      } else {
        story.image = isExist?.my_stories?.[index]?.image ?? "";
      }
    }
  }


  if (req.body?.my_stories?.length) {
    for (const [index, story] of req.body.my_stories.entries()) {
      if (story.title) {
        story.title = JSON.parse(story.title);
      }
      if (story.description) {
        story.description = JSON.parse(story.description);
      }
    }
  }


   console.log("deletedImages : ",deletedImages);
   if (deletedImages.length) {
      try {
        await Promise.allSettled(
          deletedImages.map((image) => deleteFromS3(image))
        );
      } catch (err) {
        console.error("Image deletion failed:", err);
      }
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
  console.log("acceptLanguage",acceptLanguage);

  
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

exports.fetchOurStoryController = async (req, res) => {
  
  const {_id} = req.params;
  console.log("step 1",_id);

  const data = await FindStory(_id);
  console.log("step 2",data);
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



