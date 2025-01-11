"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  productTypeId: Joi.string().required(),
  minRange: Joi.number().required(),
  maxRange: Joi.number().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  productTypeId: Joi.string().optional(),
  minRange: Joi.number().optional(),
  maxRange: Joi.number().optional(),
  name: Joi.string().required(),
});

exports.activeValidator = Joi.object({
  productTypeId: Joi.string().optional(),
});
