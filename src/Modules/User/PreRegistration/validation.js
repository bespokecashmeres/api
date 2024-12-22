"use strict";
const joi = require("joi");
const { MOBILE_NUMBER_REGEX } = require("../../../../utils/regex");

exports.createUser = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .optional()
    .allow(""),
  email: joi.string().email().required(),
  country_id: joi.string().hex().length(24).optional().allow(null),
  gender_id: joi.string().hex().length(24).required(),
});
