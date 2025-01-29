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
  rowsReorderData,
  getDataForDropdown,
  getByQuery,
  getDataForDropdownBySlug,
} = require("./dbQuery");
const {
  deleteFromS3,
  uploadToS3,
} = require("../../../../../utils/fileUploads");
const { ObjectId } = require("mongoose").Types;

exports.createController = async (req, res) => {
  const statusExists = await getByQuery({ slug: req.body.slug });
  if (statusExists) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.SLUG_EXISTS),
    }
  }

  const graphImage = req.files?.["graphImage"]
    ? req.files["graphImage"][0]
    : null;
  const realImage = req.files?.["realImage"] ? req.files["realImage"][0] : null;

  if (graphImage) {
    try {
      const imagePath = await uploadToS3(graphImage, "step-card");
      req.body.graphImage = imagePath;
    } catch (error) {
      console.error("graphImage upload failed:", error);
    }
  }

  if (realImage) {
    try {
      const pdfPath = await uploadToS3(realImage, "step-card");
      req.body.realImage = pdfPath;
    } catch (error) {
      console.error("realImage upload failed:", error);
    }
  }

  try {
    req.body.title = req.body.title ? JSON.parse(req.body.title) : [];
    req.body.description = req.body.description
      ? JSON.parse(req.body.description)
      : [];
  } catch (error) {
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
};

exports.updateController = async (req, res, next) => {
  const { _id } = req.body;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };

  if (req.body.slug) {
    const statusExists = await getByQuery({ slug: req.body.slug, _id: { $ne: new ObjectId(_id) } });
    if (statusExists) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.SLUG_EXISTS),
      }
    }
  }

  try {
    const graphImage = req.files?.["graphImage"]
      ? req.files["graphImage"][0]
      : null;
    const realImage = req.files?.["realImage"]
      ? req.files["realImage"][0]
      : null;
    if (graphImage) {
      try {
        const path = await uploadToS3(graphImage, "step-card");
        req.body.graphImage = path;
        await deleteFromS3(isExsist?.graphImage);
      } catch (error) { }
    }
    if (realImage) {
      try {
        const path = await uploadToS3(realImage, "step-card");
        req.body.realImage = path;
        await deleteFromS3(isExsist?.realImage);
      } catch (error) {
        console.log(error, "ERROR");
      }
    }
  } catch (error) { }

  try {
    req.body.title = req.body.title ? JSON.parse(req.body.title) : [];
    req.body.description = req.body.description
      ? JSON.parse(req.body.description)
      : [];
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
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
  const { stepTypeId } = req.params;
  const acceptLanguage = req.headers["accept-language"];
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getPaginationData(
          { language: acceptLanguage, stepTypeId, ...req.body },
          {}
        )
      )
    );
};

exports.dropdownOptionsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const { stepTypeId } = req.params;
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getDataForDropdown(acceptLanguage, stepTypeId)
      )
    );
};

exports.dropdownOptionsBySlugController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const { slug } = req.params;
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getDataForDropdownBySlug(acceptLanguage, slug)
      )
    );
};

exports.rowsReorderController = async (req, res, next) => {
  const { rows } = req.body;
  if (rows) {
    req.body.rows = JSON.parse(rows);
  }

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await rowsReorderData(req.body.rows)
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
  const user = await getById(req.body._id);
  if (!user) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }
  // Todo: prevent it if it's used in product or cart or order.
  await Update({ _id: `${user.id}`, status: !!req.body.status });
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
  const isExsist = await findAll(acceptLanguage, req.body.stepTypeId);
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

  if (isExsist.status) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(
        serverResponseMessage.PLEASE_DISABLE_STEP_CARD_TO_DELETE_IT
      ),
    };
  }

  try {
    await deleteFromS3(isExsist?.graphImage);
    await deleteFromS3(isExsist?.realImage);
  } catch (error) { }
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
