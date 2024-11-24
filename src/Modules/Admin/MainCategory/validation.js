"use strict";
const Joi = require("joi");
const { slugJoiValidation, slugJoiOptionalValidation, genderJoiValidation, genderJoiOptionalValidation, statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  slug: slugJoiValidation,
  image: Joi.any().optional(),
  genderId: genderJoiValidation,
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  slug: slugJoiOptionalValidation,
  image: Joi.any().optional(),
  genderId: genderJoiOptionalValidation,
});

exports.dropdownValidator = Joi.object({
  genderId: Joi.string().hex().length(24).required(),
});
