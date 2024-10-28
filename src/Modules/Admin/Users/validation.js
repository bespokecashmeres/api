"use strict";
const joi = require("joi");
const { MOBILE_NUMBER_REGEX } = require("../../../../utils/regex");

exports.createUser = joi.object({
  first_name: joi.string().required(),
  middle_name: joi.string().allow("").optional(),
  last_name: joi.string().required(),
  password: joi.string().min(8).required(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .required(),
  email: joi.string().email().required(),
  user_type: joi
    .string()
    .valid("admin", "user", "ws")
    .optional()
    .default("user"),
  country_id: joi.string().hex().length(24).required().messages({
    "any.required": "Country is required",
  }),
  gender: joi.string().required().messages({
    "string.base": "gender should be a type of text",
    "string.empty": "gender is required",
    "any.required": "gender is required",
  }),
  status: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
  news_letter: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "News letter should be either true or false",
    "any.only": "News letter should be either true or false",
    "any.required": "News letter is a required",
  }),
  height: joi.string().allow("").optional(),
  weight: joi.string().allow("").optional(),
});

exports.getUserAndMeasurement = joi.object({
  _id: joi.string().hex().length(24).required(),
});

exports.updateUserStatus = joi.object({
  status: joi.boolean().required().valid(true, false).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
  _id: joi.string().hex().length(24).required(),
});

exports.updateUser = joi.object({
  first_name: joi.string().optional(),
  middle_name: joi.string().allow("").optional(),
  last_name: joi.string().optional(),
  password: joi.string().min(8).optional(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .optional(),
  email: joi.string().email().optional(),
  country_id: joi.string().hex().length(24).optional(),
  gender: joi.string().optional().messages({
    "string.base": "gender should be a type of text",
    "string.empty": "gender is required",
  }),
  status: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
  height: joi.string().allow("").optional(),
  weight: joi.string().allow("").optional(),
  profile_picture: joi.any().optional(),
});

exports.getUsers = joi.object({
  page: joi.number().required(),
  perPage: joi.number().required(),
  sortBy: joi.string().optional(),
  sortOrder: joi.string().optional(),
  search: joi.string().optional().allow(""),
  filter: joi.object().optional()
});

exports.createUserAndMeasurement = joi.object({
  first_name: joi.string().required(),
  middle_name: joi.string().allow("").optional(),
  last_name: joi.string().required(),
  password: joi.string().min(8).required(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .required(),
  email: joi.string().email().required(),
  user_type: joi
    .string()
    .valid("admin", "user", "ws")
    .optional()
    .default("user"),
  country_id: joi.string().hex().length(24).required().messages({
    "any.required": "Country is required",
  }),
  gender: joi.string().required().messages({
    "string.base": "gender should be a type of text",
    "string.empty": "gender is required",
    "any.required": "gender is required",
  }),
  status: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
  height: joi.string().allow("").optional(),
  weight: joi.string().allow("").optional(),
  isMeasurementAdded: joi
    .boolean()
    .optional()
    .valid(true, false)
    .default(false)
    .messages({
      "boolean.base": "Is Measurement Added should be either true or false",
      "any.only": "Is Measurement Added should be either true or false",
      "any.required": "Is Measurement Added is a required",
    }),
  measurements: joi.string().optional(),
});

exports.createWholeSaler = joi.object({
  first_name: joi.string().required(),
  middle_name: joi.string().allow("").optional(),
  last_name: joi.string().required(),
  password: joi.string().min(8).required(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .required(),
  email: joi.string().email().required(),
  user_type: joi
    .string()
    .valid("admin", "user", "ws")
    .optional()
    .default("user"),
  country_id: joi.string().hex().length(24).required().messages({
    "any.required": "Country is required",
  }),
  gender: joi.string().required().messages({
    "string.base": "gender should be a type of text",
    "string.empty": "gender is required",
    "any.required": "gender is required",
  }),
  status: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
});

exports.updateUserAndMesurement = joi.object({
  first_name: joi.string().optional(),
  middle_name: joi.string().allow("").optional(),
  last_name: joi.string().optional(),
  password: joi
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .min(8)
    .optional(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .optional(),
  email: joi
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .email()
    .optional(),
  _id: joi.string().hex().length(24).required(),
  country_id: joi.string().hex().length(24).optional(),
  gender: joi.string().optional().messages({
    "string.base": "gender should be a type of text",
    "string.empty": "gender is required",
  }),
  status: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
  isMeasurementAdded: joi
    .boolean()
    .optional()
    .valid(true, false)
    .default(false)
    .messages({
      "boolean.base": "Is Measurement Added should be either true or false",
      "any.only": "Is Measurement Added should be either true or false",
      "any.required": "Is Measurement Added is a required",
    }),
  height: joi.string().allow("").optional(),
  weight: joi.string().allow("").optional(),
  measurements: joi.string().optional(),
});

exports.updateWholeSaler = joi.object({
  first_name: joi.string().optional(),
  middle_name: joi.string().allow("").optional(),
  last_name: joi.string().optional(),
  password: joi
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .min(8)
    .optional(),
  mobile_number: joi
    .string()
    .regex(MOBILE_NUMBER_REGEX)
    .min(3)
    .optional(),
  email: joi
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .email()
    .optional(),
  _id: joi.string().hex().length(24).required(),
  country_id: joi.string().hex().length(24).optional(),
  gender: joi.string().optional().messages({
    "string.base": "gender should be a type of text",
    "string.empty": "gender is required",
  }),
  status: joi.boolean().optional().valid(true, false).default(true).messages({
    "boolean.base": "Status should be either true or false",
    "any.only": "Status should be either true or false",
    "any.required": "Status is a required",
  }),
});
