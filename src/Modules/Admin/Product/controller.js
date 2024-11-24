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
  getProductListPaginationData,
  rowsReorderData,
  getRelatedOptionsForDropdown,
} = require("./dbQuery");

const { getById: getMainCategoryById } = require("../MainCategory/dbQuery");
const { getById: getSubCategoryById } = require("../SubCategory/dbQuery");
const { getById: getChildCategoryById } = require("../ChildCategory/dbQuery");
const {
  getById: getSubChildCategoryById,
} = require("../SubChildCategory/dbQuery");
const {
  deleteFromS3,
  deleteManyFromS3,
  uploadToS3,
  uploadManyToS3,
} = require("../../../../utils/fileUploads");

exports.createController = async (req, res, next) => {
  const isCategoryExsist = await getMainCategoryById(req.body.mainCategoryId);
  if (!isCategoryExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  if (req.body.subCategoryId) {
    const isSubCategoryExsist = await getSubCategoryById(
      req.body.subCategoryId
    );
    if (!isSubCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }
  if (req.body.childCategoryId) {
    const isChildCategoryExsist = await getChildCategoryById(
      req.body.childCategoryId
    );
    if (!isChildCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }
  if (req.body.subChildCategoryId) {
    const isSubChildCategoryExsist = await getSubChildCategoryById(
      req.body.subChildCategoryId
    );
    if (!isSubChildCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }

  if (req.body?.name) {
    req.body.name = JSON.parse(req.body.name);
  }

  if (req.body?.shippingAndReturnPolicy) {
    req.body.shippingAndReturnPolicy = JSON.parse(
      req.body.shippingAndReturnPolicy
    );
  }

  if (req.body?.design) {
    for (const [index, design] of req.body.design.entries()) {
      design.name = JSON.parse(design.name);
      design.value = JSON.parse(design.value);
      design.tooltip = JSON.parse(design.tooltip);
    }
  }

  if (req.files) {
    for (const [index, color] of req.body.colors.entries()) {
      if (color.description) {
        color.description = JSON.parse(color.description);
      }
      // Handle single image upload for each color
      if (req.files[`colors[${index}][image]`]) {
        const singleImageFile = req.files[`colors[${index}][image]`][0];
        try {
          color.image = await uploadToS3(singleImageFile, "products");
        } catch (err) {}
      }

      // Handle multiple images upload for each color
      if (req.files[`colors[${index}][images]`]) {
        const imageFiles = req.files[`colors[${index}][images]`];
        try {
          color.images = await uploadManyToS3(imageFiles, "products");
        } catch (err) {}
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
  if (req.body?.mainCategoryId) {
    const isCategoryExsist = await getMainCategoryById(req.body.mainCategoryId);
    if (!isCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }
  if (req.body?.subCategoryId) {
    const isSubCategoryExsist = await getSubCategoryById(
      req.body.subCategoryId
    );
    if (!isSubCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }

  if (req.body?.childCategoryId) {
    const isChildCategoryExsist = await getChildCategoryById(
      req.body.childCategoryId
    );
    if (!isChildCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }
  if (req.body.subChildCategoryId) {
    const isSubChildCategoryExsist = await getSubChildCategoryById(
      req.body.subChildCategoryId
    );
    if (!isSubChildCategoryExsist)
      throw {
        code: httpStatusCodes.UNPROCESSABLE_ENTITY,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
  }

  if (req.body?.name) {
    req.body.name = JSON.parse(req.body.name);
  }

  if (req.body?.shippingAndReturnPolicy) {
    req.body.shippingAndReturnPolicy = JSON.parse(
      req.body.shippingAndReturnPolicy
    );
  }

  if (req.body?.design) {
    for (const [index, design] of req.body.design.entries()) {
      design.name = JSON.parse(design.name);
      design.value = JSON.parse(design.value);
      design.tooltip = JSON.parse(design.tooltip);
    }
  }

  if (req.body.colors) {
    for (const [index, color] of req.body.colors.entries()) {
      const colorsObj = isExsist.colors[index];
      color.image = colorsObj.image;
      color.images = colorsObj.images;
    }
  }

  if (req.body.colorsImages) {
    const colorsImages = JSON.parse(req.body.colorsImages);
    const deletableImages = [];
    for (const [index, color] of req.body.colors.entries()) {
      color.images = (colorsImages[index].images ?? []).filter(
        (img) => !colorsImages[index].deleteImages.includes(img)
      );
      deletableImages.push(...colorsImages[index].deleteImages);
    }
    try {
      if (deletableImages.length) {
        await deleteManyFromS3(deletableImages);
      }
    } catch (err) {}
  }

  if (req.files) {
    for (const [index, color] of req.body.colors.entries()) {
      if (color.description) {
        color.description = JSON.parse(color.description);
      }
      // Handle single image upload for each color
      if (req.files[`colors[${index}][image]`]) {
        const oldImageUrl = isExsist.colors[index].image;
        if (oldImageUrl) {
          try {
            await deleteFromS3(oldImageUrl);
          } catch (err) {}
        }
        const singleImageFile = req.files[`colors[${index}][image]`][0];
        try {
          color.image = await uploadToS3(singleImageFile, "products");
        } catch (err) {}
      }

      // Handle multiple images upload for each color
      if (req.files[`colors[${index}][images]`]) {
        const imageFiles = req.files[`colors[${index}][images]`];
        try {
          const newUploadedImages = await uploadManyToS3(
            imageFiles,
            "products"
          );
          color.images = [...color.images, ...newUploadedImages];
        } catch (err) {}
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

exports.releatedOptionsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  return res.status(httpStatusCodes.SUCCESS).json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      await getRelatedOptionsForDropdown({
        language: acceptLanguage,
        ...req.body,
      })
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
  //   await deleteProductCascade(_id, req.userId);
  try {
    await deleteFromS3(isExsist?.colorImage);
    const fileKeys = isExsist.images.map((key) => key);
    await deleteManyFromS3(fileKeys);
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
  const product = await getById(req.body._id);
  if (!product) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }
  await Update({ _id: `${product.id}`, status: !!req.body.status });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_UPDATED),
      undefined
    )
  );
};
