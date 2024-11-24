"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  productTypeId: Joi.string().hex().length(24).required(),
  sizes: Joi.string().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  productTypeId: Joi.string().hex().length(24).optional(),
  sizes: Joi.string().optional(),
});
