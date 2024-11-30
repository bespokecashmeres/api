"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../../utils/validation");
const { MODULE_INFO_TYPES } = require("../../../../../utils/constants");

exports.createValidator = Joi.object({
  _id: Joi.string().hex().length(24).optional(),
  info: Joi.string().optional(),
  image: Joi.any().optional(),
  type: Joi.string()
    .required()
    .valid(...MODULE_INFO_TYPES),
  status: statusJoiValidation,
});

exports.typeValidator = Joi.object({
  type: Joi.string()
  .required()
  .valid(...MODULE_INFO_TYPES),
});
