const { serverResponseMessage } = require("../../../../config/message");
// const { generateYarnId } = require("../../../../utils/common");
const {
  uploadToS3,
  deleteManyFromS3,
  deleteFromS3,
} = require("../../../../utils/fileUploads");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
  create,
  Update,
  getById,
  getPaginationData,
  DeleteById,
  getDataForDropdown,
  findOneRecord,
} = require("./dbQuery");
const { ObjectId } = require("mongoose").Types;

exports.createController = async (req, res, next) => {
  // req.body.yarnId = await generateYarnId();
  const isExsist = await findOneRecord({ yarnId: req.body.yarnId });
  if (isExsist)
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.YARN_ID_ALREADY_EXISTS),
    };

  try {
    req.body.name = req.body.name ? JSON.parse(req.body.name) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }

  if (req.files) {
    const image = req.files?.["image"] ? req.files["image"][0] : null;
    if (image) {
      try {
        req.body.image = await uploadToS3(image, "yarns");
      } catch (error) {
        console.error("Yarn Image upload failed:", error);
      }
    }
    const imageUploadPromise = [];
    if (req.body?.yarns?.length) {
      for (const [index, yarn] of req.body?.yarns?.entries()) {
        if (req.files[`yarns[${index}][image]`]) {
          const singleImageFile = req.files[`yarns[${index}][image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "yarns").then((imageUrl) => {
                  yarn.image = imageUrl;
                })
              );
            }
          } catch (err) {
            console.error("Yarn Images upload failed:", err);
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

  if (req.body?.yarns?.length) {
    for (const [index, yarn] of req.body.yarns.entries()) {
      if (yarn.name) {
        yarn.name = JSON.parse(yarn.name);
      }
      if (yarn.value) {
        yarn.value = JSON.parse(yarn.value);
      }
      if (yarn.info) {
        yarn.info = JSON.parse(yarn.info);
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

  // Parse the multilingual data for the main record
  try {
    req.body.name = req.body.name ? JSON.parse(req.body.name) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }

  // Initialize lists for tracking image uploads and deletions
  const deletedImages = []; // Store URLs of images to delete

  // Process the main image
  if (req.files?.image) {
    const image = req.files["image"][0];
    try {
      req.body.image = await uploadToS3(image, "yarns");
      if (isExsist?.image) {
        deletedImages.push(isExsist.image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.image = isExsist?.image || "";
  }

  const imageUploadPromise = [];
  if (req.body?.yarns?.length) {
    for (const [index, yarn] of req.body?.yarns?.entries()) {
      const newImage = req.files?.[`yarns[${index}][image]`]?.[0];
      if (newImage) {
        try {
          imageUploadPromise.push(
            uploadToS3(newImage, "yarns").then((imageUrl) => {
              yarn.image = imageUrl;
            })
          );
          const oldImageUrl = isExsist?.yarns?.[index]?.image;
          if (oldImageUrl) {
            deletedImages.push(oldImageUrl);
          }
        } catch (err) {
          console.error("Yarn Images upload failed:", err);
        }
      } else {
        yarn.image = isExsist?.yarns?.[index]?.image ?? "";
      }
    }
  }

  if (req.body?.yarns?.length) {
    for (const [index, yarn] of req.body.yarns.entries()) {
      if (yarn.name) {
        yarn.name = JSON.parse(yarn.name);
      }
      if (yarn.value) {
        yarn.value = JSON.parse(yarn.value);
      }
      if (yarn.info) {
        yarn.info = JSON.parse(yarn.info);
      }
    }
  }

  if (imageUploadPromise.length) {
    try {
      await Promise.allSettled(imageUploadPromise);
    } catch (err) {
      console.log("imageUploadPromise error", err);
    }
  }

  // Identify and delete removed yarns' images
  const yarnIdsInRequest = new Set(
    req.body?.yarns?.map((yarn) => yarn.uuid) ?? []
  );
  const removedYarns =
    isExsist?.yarns?.filter((yarn) => !yarnIdsInRequest.has(yarn.uuid)) ?? [];
  removedYarns.forEach((yarn) => {
    if (yarn.image) {
      deletedImages.push(yarn.image); // Queue the old image for deletion
    }
  });

  // Perform bulk image deletions
  if (deletedImages.length) {
    try {
      await Promise.allSettled(
        deletedImages.map((image) => deleteFromS3(image))
      );
    } catch (err) {
      console.error("Image deletion failed:", err);
    }
  }

  // Update the record with the new data (including yarns)
  const updatedRecord = await Update(req.body);

  // Return success response
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

exports.listController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getPaginationData({ language: acceptLanguage, ...req.body })
      )
    );
};

exports.dropdownOptionsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getDataForDropdown(acceptLanguage)
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

exports.deleteController = async (req, res, next) => {
  const { _id } = req.params;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  // await deleteProductCascade(_id, req.userId);
  try {
    const images = isExsist.yarns.map((yarn) => yarn.image).filter(Boolean);
    await deleteManyFromS3(images);
  } catch (error) {}
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

exports.statusController = async (req, res, next) => {
  const yarn = await getById(req.body._id);
  if (!yarn) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }
  await Update({ _id: `${yarn.id}`, status: !!req.body.status });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_UPDATED),
      undefined
    )
  );
};
