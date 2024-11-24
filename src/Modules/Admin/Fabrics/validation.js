"use strict";
const Joi = require("joi");

exports.createValidator = Joi.object({
  name: Joi.string().required(),
  fabricId: Joi.string().required(),
  fabrics: Joi.string().required(),
  status: Joi.boolean().optional().valid(true, false).default(true),
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  name: Joi.string().optional(),
  fabricId: Joi.string().optional(),
  fabrics: Joi.string().optional(),
});
