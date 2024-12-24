"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../../utils/validation");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  productTypeId: Joi.string().required(),
  fittingSizeId: Joi.string().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  productTypeId: Joi.string().optional(),
  fittingSizeId: Joi.string().optional(),
  name: Joi.string().required(),
});

exports.activeValidator = Joi.object({
  productTypeId: Joi.string().optional(),
  fittingSizeId: Joi.string().optional(),
});
