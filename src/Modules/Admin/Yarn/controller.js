const { serverResponseMessage } = require("../../../../config/message");
const { generateYarnId } = require("../../../../utils/common");
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
} = require("./dbQuery");

exports.createController = async (req, res, next) => {
  req.body.yarnId = await generateYarnId();

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
    for (const [index, yarn] of req.body.yarns.entries()) {
      if (req.files[`yarns[${index}][image]`]) {
        const singleImageFile = req.files[`yarns[${index}][image]`][0];
        try {
          yarn.image = await uploadToS3(singleImageFile, "yarns");
        } catch (err) {
          console.error("Yarn Images upload failed:", err);
        }
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
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
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
        if (isExsist?.image) {
          await deleteFromS3(isExsist?.image);
        }
      } catch (error) {
        console.error("Yarn Image upload failed:", error);
      }
    }
    for (const [index, yarn] of req.body.yarns.entries()) {
      const newImage = req.files[`yarns[${index}][image]`];
      if (newImage) {
        const oldImageUrl = isExsist.yarns[index].image;
        if (oldImageUrl) {
          try {
            await deleteFromS3(oldImageUrl);
          } catch (err) {
            console.error("Yarn existing image delete failed:", err);
          }
        }
        const singleImageFile = newImage[0];
        try {
          yarn.image = await uploadToS3(singleImageFile, "yarns");
        } catch (err) {
          console.error("Yarn images upload failed:", err);
        }
      } else {
        yarn.image = isExsist.yarns[index].image;
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

  const updateRecord = await Update(req.body);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED),
        updateRecord
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
