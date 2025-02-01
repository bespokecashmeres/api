"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  slug: Joi.string().required(),
  title: Joi.any().required(),
  description: Joi.any().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  title: Joi.any().optional(),
  description: Joi.any().optional(),
  status: statusJoiValidation,
});
