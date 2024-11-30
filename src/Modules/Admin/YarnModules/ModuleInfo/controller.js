const { serverResponseMessage } = require("../../../../../config/message");
const { httpResponses } = require("../../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../../utils/http-status-codes");
const { success } = require("../../../../../utils/response");
const {
  create,
  Update,
  getById,
  getPaginationData,
  DeleteById,
  findAll,
  getByQuery,
} = require("./dbQuery");
const {
  deleteFromS3,
  uploadToS3,
} = require("../../../../../utils/fileUploads");

exports.upsertInfoController = async (req, res) => {
  const isExists = await getByQuery({ type: req.body.type });
  req.body.info = {
    ...(isExists?.info ?? {}),
    ...(req.body.info ? JSON.parse(req.body.info) : {}),
  };

  let record = null;
  if (isExists) {
    record = await Update(req.body);
  } else {
    record = await create(req.body);
  }

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.CREATED,
        httpResponses.SUCCESS,
        res.__(
          serverResponseMessage[isExists ? "RECORD_UPDATED" : "RECORD_CREATED"]
        ),
        record
      )
    );
};

exports.upsertImageController = async (req, res) => {
  const isExists = await getByQuery({ type: req.body.type });

  const image = req.files?.["image"] ? req.files["image"][0] : null;

  if (image) {
    try {
      const imagePath = await uploadToS3(image, "module-info");
      console.log("imagePath: ", imagePath);
      req.body.image = imagePath;
      if (isExists?.image?.length) {
        await deleteFromS3(isExists?.image);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  }
  
  let record = null;
  if (isExists) {
    record = await Update(req.body);
  } else {
    record = await create(req.body);
  }

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.CREATED,
        httpResponses.SUCCESS,
        res.__(
          serverResponseMessage[isExists ? "RECORD_UPDATED" : "RECORD_CREATED"]
        ),
        record
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
        await getPaginationData({ language: acceptLanguage, ...req.body }, {})
      )
    );
};

exports.getDetailsByTypeController = async (req, res, next) => {
  const { type } = req.params;
  const isExsist = await getByQuery({ type: type });
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

exports.statusController = async (req, res, next) => {
  const category = await getById(req.body._id);
  if (!category) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  await Update({ _id: `${category.id}`, status: !!req.body.status });

  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_UPDATED),
      undefined
    )
  );
};

exports.getActiveController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const isExsist = await findAll(acceptLanguage);
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

exports.deleteController = async (req, res) => {
  const { _id } = req.params;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  try {
    await deleteFromS3(isExsist?.image);
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
