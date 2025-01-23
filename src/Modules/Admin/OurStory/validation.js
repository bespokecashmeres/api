const joi = require("joi");

exports.createOurStory = joi.object({
  bg_image: joi.string().required().messages({
    "object.base": "Background image must be an object",
    "any.required": "Background image is required",
  }),
  title: joi.object().required().messages({
    "object.base": "Title must be an object",
    "any.required": "Title is required",
  }),
  sub_title: joi.object().required().messages({
    "object.base": "Sub-title must be an object",
    "any.required": "Sub-title is required",
  }),
  description: joi.object().required().messages({
    "object.base": "Description must be an object",
    "any.required": "Description is required",
  }),
  my_stories: joi
    .array()
    .items(
      joi.object({
        image: joi.string().uri().optional().messages({
          "string.base": "Image must be a string",
          "string.uri": "Image must be a valid URI",
        }),
        title: joi.object().optional().messages({
          "object.base": "Title must be an object",
        }),
        description: joi.object().optional().messages({
          "object.base": "Description must be an object",
        }),
        uuid: joi.string().uuid().optional().messages({
          "string.guid": "UUID must be a valid UUID",
        }),
      })
    )
    .optional()
    .messages({
      "array.base": "My Stories must be an array",
    }),
  status: joi.boolean().optional().messages({
    "boolean.base": "Status must be a boolean",
  }),
});

exports.updateOurStory = joi.object({
  _id: joi.string().hex().length(24).required().messages({
    "string.base": "ID must be a string",
    "string.hex": "ID must be a valid hexadecimal string",
    "string.length": "ID must be exactly 24 characters long",
    "any.required": "ID is required",
  }),
  bg_image: joi.string().optional().messages({
    "object.base": "Background image must be an object",
  }),
  title: joi.object().optional().messages({
    "object.base": "Title must be an object",
  }),
  sub_title: joi.object().optional().messages({
    "object.base": "Sub-title must be an object",
  }),
  description: joi.object().optional().messages({
    "object.base": "Description must be an object",
  }),
  my_stories: joi
    .array()
    .items(
      joi.object({
        image: joi.string().uri().optional().messages({
          "string.base": "Image must be a string",
          "string.uri": "Image must be a valid URI",
        }),
        title: joi.object().optional().messages({
          "object.base": "Title must be an object",
        }),
        description: joi.object().optional().messages({
          "object.base": "Description must be an object",
        }),
        uuid: joi.string().uuid().optional().messages({
          "string.guid": "UUID must be a valid UUID",
        }),
      })
    )
    .optional()
    .messages({
      "array.base": "My Stories must be an array",
    }),
  status: joi.boolean().optional().messages({
    "boolean.base": "Status must be a boolean",
  }),
});
