"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
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
  productTypeId: Joi.string()
    .hex()
    .length(24)
    .optional(),
  status: statusJoiValidation.optional()
});