"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../../utils/validation");

exports.createValidator = Joi.object({
  value: Joi.string().required(),
  productTypeId: Joi.string().required(),
  fittingSizeId: Joi.string().required(),
  stepTypeId: Joi.string().required(),
  stepCardId: Joi.string().required(),
  fittingSizeOptionId: Joi.string().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  productTypeId: Joi.string().optional(),
  fittingSizeId: Joi.string().optional(),
  stepTypeId: Joi.string().optional(),
  stepCardId: Joi.string().optional(),
  fittingSizeOptionId: Joi.string().optional(),
  value: Joi.string().optional(),
});
