"use strict";
const joi = require("joi");


exports.googleLoginUser = joi.object({
  email: joi.string().email().required(),
  token: joi.string().required(),
  userType: joi.string().valid("user", "admin", "ws").required().messages({
    "string.base": "userType should be a type of text",
    "string.empty": "userType is required",
    "any.required": "userType is required",
    "any.only": 'userType must be either "user" or "admin" or "ws"',
  }),
});

exports.loginUser = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  userType: joi.string().valid("user", "admin", "ws").required().messages({
    "string.base": "userType should be a type of text",
    "string.empty": "userType is required",
    "any.required": "userType is required",
    "any.only": 'userType must be either "user" or "admin" or "ws"',
  }),
});

exports.resetPasswordValidator = joi.object({
  oldPassword: joi
    .string()
    .trim()
    .min(8)
    .message("Password must be at least 8 characters long.")
    .required(),
  newPassword: joi
    .string()
    .trim()
    .min(8)
    .message("Password must be at least 8 characters long.")
    .required(),
});

exports.forgotPasswordValidator = joi.object({
  email: joi.string().email().required(),
  user_type: joi
    .string()
    .optional()
    .valid("admin", "user", "ws")
    .default("user"),
});

exports.setNewPasswordValidator = joi.object({
  newPassword: joi
    .string()
    .trim()
    .min(8)
    .message("Password must be at least 8 characters long.")
    .required(),
});
