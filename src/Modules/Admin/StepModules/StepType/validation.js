"use strict";
const Joi = require("joi");
const { statusJoiValidation, slugJoiValidation, slugJoiOptionalValidation } = require("../../../../../utils/validation");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  info: Joi.string().required(),
  slug: slugJoiValidation,
  productTypeId: Joi.string().required(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().required(),
  slug: slugJoiOptionalValidation,
  info: Joi.string().required(),
});

exports.tabsValidator = Joi.object({
  productTypeId: Joi.string().hex().length(24).optional(),
});

exports.activeTabsValidator = Joi.object({
  productTypeId: Joi.string().hex().length(24).required(),
});

exports.stepDetailsValidator = Joi.object({
  yarn: Joi.string().hex().length(24).required(),
  gauge: Joi.string().hex().length(24).optional(),
  pattern: Joi.string().hex().length(24).optional(),
  style: Joi.string().hex().length(24).optional(),
  fitting: Joi.string().hex().length(24).optional(),
  productTypeId: Joi.string().hex().length(24).optional(),
  nextStepSlug: Joi.string().optional(),
});

exports.stepFullViewValidator = Joi.object({
  yarn: Joi.string().hex().length(24).optional(),
  gauge: Joi.string().hex().length(24).optional(),
  pattern: Joi.string().hex().length(24).optional(),
  style: Joi.string().hex().length(24).optional(),
  fitting: Joi.string().hex().length(24).optional(),
  productTypeId: Joi.string().hex().length(24).optional(),
});
