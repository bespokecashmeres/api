"use strict";
const Joi = require("joi");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  yarnId: Joi.string().required(),
  yarns: Joi.string().required(),
  status: Joi.boolean().optional().valid(true, false).default(true),
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().optional(),
  yarnId: Joi.string().optional(),
  yarns: Joi.string().optional(),
});
