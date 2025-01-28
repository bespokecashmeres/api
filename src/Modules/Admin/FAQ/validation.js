"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  faqId: Joi.string().required(),
  genderId: Joi.string().required(),
  title: Joi.any().required(),
  description: Joi.any().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  faqId: Joi.string().optional(),
  genderId: Joi.string().optional(),
  title: Joi.any().optional(),
  description: Joi.any().optional(),
  status: statusJoiValidation,
});
