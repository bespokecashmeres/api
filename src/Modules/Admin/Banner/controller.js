const { serverResponseMessage } = require("../../../../config/message");
const { uploadToS3, deleteFromS3 } = require("../../../../utils/fileUploads");

const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
  create,
  Update,
  getById,
  DeleteById,
  isSlugExist,
} = require("./dbQuery");

exports.createController = async (req, res, next) => {
  const { slug } = req.body;

  const isRecordExist = await isSlugExist(slug);
  if (isRecordExist) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.RECORD_ALREADY_EXISTS),
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
 

  if(req.body?.description){
    try {
      req.body.description = req.body.description ? JSON.parse(req.body.description): {};
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
        req.body.bg_image = await uploadToS3(image, "banner");
      } catch (error) {
        console.error("Banner Image upload failed:", error);
      }
    }
  }

  const createRecord = await create(req.body);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.CREATED,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_CREATED),
        createRecord
      )
    );
};

exports.updateController = async (req, res, next) => {
  const { _id } = req.body;

  // Fetch the existing record
  const isExsist = await getById(_id);
  if (!isExsist) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  const {slug} = req.body;

  if(slug && isExsist != slug){
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.UNAUTHORIZED),
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



  if (req.files?.bg_image) {
    const image = req.files["bg_image"][0];
    try {
      req.body.bg_image = await uploadToS3(image, "banner");
      if (isExsist?.bg_image) {
        await deleteFromS3(isExsist.bg_image);
      }
    } catch (error) {
      console.error("Error handling image update:", error);
    }
  }
  
  
  const updatedRecord = await Update(req.body);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED),
        updatedRecord
      )
    );
};

exports.deleteController = async (req, res, next) => {
  const { _id } = req.params;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };

  const deleteIndex = await DeleteById(_id);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_DELETED),
        deleteIndex
      )
    );
};

exports.getDetailController = async (req, res, next) => {
  const { _id } = req.params;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        isExsist
      )
    );
};

