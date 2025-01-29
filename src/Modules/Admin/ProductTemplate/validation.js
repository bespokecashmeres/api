"use strict";
const Joi = require("joi");
const { statusJoiValidation, genderJoiOptionalValidation, genderJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  title: Joi.string().required(),
  images: Joi.any().optional(),
  contents: Joi.array().items(
    Joi.object({
      title: Joi.string().optional(),
      description: Joi.string().optional()
    })
  ).optional(),
  yarn: Joi.string()
    .hex()
    .length(24)
    .required(),
  steps: Joi.array().items(
    Joi.object({
      stepType: Joi.string()
        .hex()
        .length(24)
        .required(),
      stepCard: Joi.string()
        .hex()
        .length(24)
        .required()
    })
  ).required(),
  relatedProducts: Joi.array().optional(),
  productTypeId: Joi.string()
    .hex()
    .length(24)
    .required(),
  status: statusJoiValidation,
  genderId: genderJoiValidation,
  basePriceXs: Joi.number().required(),
  colourId: Joi.string().hex().length(24).required(),
  materialId: Joi.string().hex().length(24).required(),
  patternId: Joi.string().hex().length(24).required(),
});

exports.updateValidator = Joi.object({
  _id: Joi.string()
    .hex()
    .length(24)
    .required(),
  title: Joi.string().optional(),
  images: Joi.any().optional(),
  contents: Joi.array().items(
    Joi.object({
      title: Joi.string().optional(),
      description: Joi.string().optional()
    })
  ).optional(),
  existingImages: Joi.string()
    .optional(),
  deleteImages: Joi.string()
    .optional(),
  yarn: Joi.string()
    .hex()
    .length(24)
    .optional(),
  steps: Joi.array().items(
    Joi.object({
      stepType: Joi.string()
        .hex()
        .length(24)
        .required(),
      stepCard: Joi.string()
        .hex()
        .length(24)
        .required()
    })
  ).optional(),
  relatedProducts: Joi.array().optional(),
  productTypeId: Joi.string()
    .hex()
    .length(24)
    .optional(),
  genderId: genderJoiOptionalValidation,
  status: statusJoiValidation.optional(),
  basePriceXs: Joi.number().optional(),
  colourId: Joi.string().hex().length(24).optional(),
  materialId: Joi.string().hex().length(24).optional(),
  patternId: Joi.string().hex().length(24).optional(),
});

exports.dropdownValidator = Joi.object({
  _id: Joi.string()
    .hex()
    .length(24)
    .optional()
})
