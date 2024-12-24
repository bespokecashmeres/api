"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../../utils/validation");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  info: Joi.string().required(),
  productTypeId: Joi.string().required(),
  showFittingOption: Joi.boolean().optional().default(false),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().required(),
  info: Joi.string().required(),
  showFittingOption: Joi.boolean().optional().default(false),
});

exports.tabsValidator = Joi.object({
  productTypeId: Joi.string().hex().length(24).optional(),
});

exports.activeTabsValidator = Joi.object({
  productTypeId: Joi.string().hex().length(24).required(),
});
