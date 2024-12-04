const Joi = require("joi");
const { ALLOWED_LOCALE, DEFAULT_LOCALE, JOI_ERROR } = require("./constants");
const { SLUG_REGEX } = require("./regex");

exports.slugJoiValidation = Joi.string()
  .pattern(new RegExp(SLUG_REGEX))
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_SLUG`,
    "string.pattern.base": `${JOI_ERROR}_INVALID_SLUG`,
  });
exports.slugJoiOptionalValidation = Joi.string()
  .pattern(new RegExp(SLUG_REGEX))
  .optional()
  .messages({
    "string.pattern.base": `${JOI_ERROR}_INVALID_SLUG`,
  });
exports.genderJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_GENDER`,
    "string.length": `${JOI_ERROR}_INVALID_GENDER`,
    "string.hex": `${JOI_ERROR}_INVALID_GENDER`,
  });
exports.genderJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_GENDER`,
    "string.hex": `${JOI_ERROR}_INVALID_GENDER`,
  });
exports.sizeJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_SIZE`,
    "string.length": `${JOI_ERROR}_INVALID_SIZE`,
    "string.hex": `${JOI_ERROR}_INVALID_SIZE`,
  });
exports.sizeJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_SIZE`,
    "string.hex": `${JOI_ERROR}_INVALID_SIZE`,
  });
exports.nameJoiValidation = Joi.string()
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_GENDER`,
  });
exports.nameJoiOptionalValidation = Joi.string().optional();
exports.priceJoiValidation = Joi.number()
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_PRICE`,
  });
exports.priceJoiOptionalValidation = Joi.number().optional();
exports.mainCategoryIdJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_MAIN_CATEGORY`,
    "string.length": `${JOI_ERROR}_INVALID_MAIN_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_MAIN_CATEGORY`,
  });
exports.mainCategoryIdJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_MAIN_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_MAIN_CATEGORY`,
  });
exports.subCategoryIdJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_SUB_CATEGORY`,
    "string.length": `${JOI_ERROR}_INVALID_SUB_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_SUB_CATEGORY`,
  });
exports.subCategoryIdJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_SUB_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_SUB_CATEGORY`,
  });
exports.childCategoryIdJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_CHILD_CATEGORY`,
    "string.length": `${JOI_ERROR}_INVALID_CHILD_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_CHILD_CATEGORY`,
  });
exports.childCategoryIdJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_CHILD_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_CHILD_CATEGORY`,
  });
exports.subChildCategoryIdJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_SUB_CHILD_CATEGORY`,
    "string.length": `${JOI_ERROR}_INVALID_SUB_CHILD_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_SUB_CHILD_CATEGORY`,
  });
exports.subChildCategoryIdJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_SUB_CHILD_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_SUB_CHILD_CATEGORY`,
  });
exports.productTypeCategoryIdJoiValidation = Joi.string()
  .hex()
  .length(24)
  .required()
  .messages({
    "any.required": `${JOI_ERROR}_REQUIRED_PRODUCT_TYPE_CATEGORY`,
    "string.length": `${JOI_ERROR}_INVALID_PRODUCT_TYPE_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_PRODUCT_TYPE_CATEGORY`,
  });
exports.productTypeCategoryIdJoiOptionalValidation = Joi.string()
  .hex()
  .length(24)
  .optional()
  .messages({
    "string.length": `${JOI_ERROR}_INVALID_PRODUCT_TYPE_CATEGORY`,
    "string.hex": `${JOI_ERROR}_INVALID_PRODUCT_TYPE_CATEGORY`,
  });
const statusJoiValidation = Joi.boolean()
  .optional()
  .valid(true, false)
  .default(true)
  .messages({
    "any.only": `${JOI_ERROR}_ANY_ONLY_STATUS`,
    "boolean.base": `${JOI_ERROR}_TYPE_STATUS`,
  });
exports.statusJoiValidation = statusJoiValidation;

exports.listValidator = Joi.object({
  page: Joi.number().required(),
  perPage: Joi.number().required(),
  sortBy: Joi.string().optional(),
  sortOrder: Joi.string().optional(),
  search: Joi.string().optional().allow(""),
  filter: Joi.object().optional(),
  language: Joi.string()
    .valid(...ALLOWED_LOCALE)
    .default(DEFAULT_LOCALE)
    .optional(),
});

exports.reorderValidator = Joi.object({
  rows: Joi.string().required(),
});

exports.IdValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
});

exports.statusValidator = Joi.object({
  status: Joi.boolean()
    .valid(true, false)
    .required()
    .messages({
      "any.required": `${JOI_ERROR}_REQUIRED_STATUS`,
      "any.only": `${JOI_ERROR}_ANY_ONLY_STATUS`,
      "boolean.base": `${JOI_ERROR}_TYPE_STATUS`,
    }),
  _id: Joi.string().hex().length(24).required(),
});

exports.createNameValidator = Joi.object({
  name: Joi.string().required(),
  status: statusJoiValidation,
});

exports.updateNameValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().optional(),
});
