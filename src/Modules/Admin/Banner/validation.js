"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  bg_image: Joi.any().optional(),
  slug: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  bg_image: Joi.any().optional(),
  slug: Joi.string().optional(),
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  status: statusJoiValidation,
});
