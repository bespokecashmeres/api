const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
  create,
  Update,
  getById,
  getPaginationData,
  DeleteById,
  findAll,
  rowsReorderData,
  getSubCategoriesForDropdown,
} = require("./dbQuery");
const { deleteFromS3, uploadToS3 } = require("../../../../utils/fileUploads");
const { UpdateMany } = require("../ChildCategory/dbQuery");
const { UpdateMany: SubChildCategoryUpdateMany } = require("../SubChildCategory/dbQuery");

exports.createController = async (req, res) => {
  const image = req.files?.["image"] ? req.files["image"][0] : null;

  if (image) {
    try {
      const imagePath = await uploadToS3(image, "sub-category");
      req.body.image = imagePath;
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  }

  try {
    req.body.name = req.body.name ? JSON.parse(req.body.name) : [];
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

  try {
    const image = req.files?.["image"] ? req.files["image"][0] : null;
    if (image) {
      try {
        const path = await uploadToS3(image, "sub-category");
        req.body.image = path;
        await deleteFromS3(isExsist?.image);
      } catch (error) {}
    }
  } catch (error) {}

  try {
    req.body.name = req.body.name ? JSON.parse(req.body.name) : [];
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
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getPaginationData(req.body, {})
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
  const category = await getById(req.body._id);
  if (!category) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  await Promise.all([
    Update({ _id: `${category.id}`, status: !!req.body.status }),
    UpdateMany({
      filter: { subCategoryId: category.id },
      updateFields: { status: !!req.body.status },
    }),
    SubChildCategoryUpdateMany({
      filter: { subCategoryId: category.id },
      updateFields: { status: !!req.body.status },
    })
  ]);
  
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
    await deleteFromS3(isExsist?.pdf);
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

exports.dropdownOptionsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  return res.status(httpStatusCodes.SUCCESS).json(
      success(
          httpStatusCodes.SUCCESS,
          httpResponses.SUCCESS,
          res.__(serverResponseMessage.RECORD_FETCHED),
          await getSubCategoriesForDropdown(req.body, acceptLanguage)
      )
  );
};
