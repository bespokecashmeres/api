"use strict";
const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  yarnId: Joi.string().required(),
  name: Joi.string().required(),
  image: Joi.any().optional(),
  countryId: Joi.string().hex().length(24).required(),
  colourId: Joi.string().hex().length(24).required(),
  seasonalityId: Joi.string().hex().length(24).required(),
  perceivedWeightId: Joi.string().hex().length(24).required(),
  materialId: Joi.string().hex().length(24).required(),
  yarns: Joi.array()
    .items(
      Joi.object({
        uuid: Joi.string().optional(),
        image: Joi.any().optional(),
        name: Joi.string().required(),
        value: Joi.string().required(),
        info: Joi.string().required(),
      })
    )
    .optional(),
  status: statusJoiValidation,
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  yarnId: Joi.string().optional(),
  name: Joi.string().optional(),
  image: Joi.any().optional(),
  countryId: Joi.string().hex().length(24).optional(),
  colourId: Joi.string().hex().length(24).optional(),
  seasonalityId: Joi.string().hex().length(24).optional(),
  perceivedWeightId: Joi.string().hex().length(24).optional(),
  materialId: Joi.string().hex().length(24).optional(),
  yarns: Joi.array()
    .items(
      Joi.object({
        uuid: Joi.string().optional(),
        image: Joi.any().optional(),
        name: Joi.string().optional(),
        value: Joi.string().optional(),
        info: Joi.string().optional(),
      })
    )
    .optional(),
});
