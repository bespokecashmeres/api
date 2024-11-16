const Joi = require("joi");
const { ALLOWED_LOCALE, DEFAULT_LOCALE } = require("./constants");

exports.listValidator = Joi.object({
  page: Joi.number().required(),
  perPage: Joi.number().required(),
  sortBy: Joi.string().optional(),
  sortOrder: Joi.string().optional(),
  search: Joi.string().optional().allow(""),
  filter: Joi.object().optional(),
  language: Joi.string()
    .valid(...ALLOWED_LOCALE)
    .default(DEFAULT_LOCALE)
    .optional(),
});

exports.reorderValidator = Joi.object({
  rows: Joi.string().required(),
});

exports.IdValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
});

exports.statusValidator = Joi.object({
  status: Joi.boolean().valid(true, false).required(),
  _id: Joi.string().hex().length(24).required(),
});
