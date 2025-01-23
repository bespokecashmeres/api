const { serverResponseMessage } = require("../../../../config/message");
const {
  uploadToS3,
  deleteFromS3,
} = require("../../../../utils/fileUploads");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
  create,
  update,
  getById,
  getPaginationData,
  deleteById,
  updateStatus,
} = require("./dbQuery");

exports.createController = async (req, res, next) => {
  try {
    // Handle main image upload
    if (req.files?.image?.[0]) {
      try {
        req.body.image = await uploadToS3(req.files.image[0], "new-products");
      } catch (error) {
        console.error("Product Image upload failed:", error);
        throw {
          code: httpStatusCodes.BAD_REQUEST,
          message: res.__(serverResponseMessage.IMAGE_UPLOAD_FAILED),
        };
      }
    }

    // Parse multilingual data
    try {
      req.body.title = req.body.title ? JSON.parse(req.body.title) : {};
      if (req.body?.contents?.length) {
        req.body.contents = req.body.contents.map(content => ({
          title: JSON.parse(content.title),
          description: JSON.parse(content.description)
        }));
      }
    } catch (error) {
      console.log(error);
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
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
  } catch (error) {
    // Clean up uploaded image if record creation fails
    if (req.body.image) {
      await deleteFromS3(req.body.image).catch(console.error);
    }
    throw error;
  }
};

exports.updateController = async (req, res, next) => {
  const { _id } = req.body;
  
  // Fetch existing record
  const existingRecord = await getById(_id);
  if (!existingRecord) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  let oldImage = existingRecord.image;

  try {
    // Handle main image upload
    if (req.files?.image?.[0]) {
      try {
        req.body.image = await uploadToS3(req.files.image[0], "new-products");
      } catch (error) {
        console.error("Product Image upload failed:", error);
        throw {
          code: httpStatusCodes.BAD_REQUEST,
          message: res.__(serverResponseMessage.IMAGE_UPLOAD_FAILED),
        };
      }
    }

    // Parse multilingual data
    try {
      if (req.body.title) {
        req.body.title = JSON.parse(req.body.title);
      }
      if (req.body?.contents?.length) {
        req.body.contents = req.body.contents.map(content => ({
          title: JSON.parse(content.title),
          description: JSON.parse(content.description)
        }));
      }
    } catch (error) {
      console.log(error);
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }

    const updatedRecord = await update(req.body);

    // Delete old image if new image was uploaded successfully
    if (req.body.image && oldImage) {
      await deleteFromS3(oldImage).catch(console.error);
    }

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
  } catch (error) {
    // Clean up newly uploaded image if update fails
    if (req.body.image && req.body.image !== oldImage) {
      await deleteFromS3(req.body.image).catch(console.error);
    }
    throw error;
  }
};

exports.listController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const data = await getPaginationData({ 
    language: acceptLanguage, 
    ...req.body 
  });
  
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        data
      )
    );
};

exports.getDetailController = async (req, res, next) => {
  const { _id } = req.params;
  
  const record = await getById(_id);
  if (!record) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        record
      )
    );
};

exports.deleteController = async (req, res, next) => {
  const { _id } = req.params;
  
  const existingRecord = await getById(_id);
  if (!existingRecord) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  try {
    // Delete the image from S3
    if (existingRecord.image) {
      await deleteFromS3(existingRecord.image).catch(console.error);
    }
    
    await deleteById(_id);

    return res
      .status(httpStatusCodes.SUCCESS)
      .json(
        success(
          httpStatusCodes.SUCCESS,
          httpResponses.SUCCESS,
          res.__(serverResponseMessage.RECORD_DELETED),
          null
        )
      );
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
};

exports.statusController = async (req, res, next) => {
  const { _id } = req.params;
  const { status } = req.body;

  const existingRecord = await getById(_id);
  if (!existingRecord) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  const updatedRecord = await updateStatus(_id, status);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.STATUS_UPDATED),
        updatedRecord
      )
    );
};