"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

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
  status: statusJoiValidation
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
  status: statusJoiValidation.optional()
});

exports.dropdownValidator = Joi.object({
  _id: Joi.string()
    .hex()
    .length(24)
    .optional()
})
