"use strict";
const Joi = require("joi");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  fields: Joi.string().required()
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().optional(),
  fields: Joi.string().optional(),
  status: Joi.boolean().valid(true, false).optional().messages({
    "boolean.base": "Status should be a boolean value",
    "any.only": "Status should be either true or false",
  }),
});

exports.listValidator = Joi.object({
  page: Joi.number().required(),
  perPage: Joi.number().required(),
  sortBy: Joi.string().optional(),
  sortOrder: Joi.string().optional(),
  search: Joi.string().allow("").optional(),
  filter: Joi.object().optional()
});

exports.IdValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
});

exports.statusValidator = Joi.object({
  status: Joi.boolean().required().valid(true, false).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
  _id: Joi.string().hex().length(24).required(),
});
