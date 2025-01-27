const joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

exports.createOurStory = joi.object({
  bg_image: joi.any().optional().messages({
    "object.base": "Background image must be an object",
    "any.required": "Background image is required",
  }),
  thumb_image: joi.any().optional().messages({
    "object.base": "Background image must be an object",
    "any.required": "Background image is required",
  }),
  title: joi.string().required().messages({
    "object.base": "Title must be an string",
    "any.required": "Title is required",
  }),
  sub_title: joi.string().required().messages({
    "object.base": "Sub-title must be an object",
    "any.required": "Sub-title is required",
  }),
  description: joi.string().required().messages({
    "object.base": "Description must be an object",
    "any.required": "Description is required",
  }),
  my_stories: joi
    .array()
    .items(
      joi.object({
        image: joi.any().optional().messages({
          "string.base": "Image must be a any type",
        }),
        title: joi.string().optional().messages({
          "object.base": "Title must be an object",
        }),
        description: joi.string().optional().messages({
          "object.base": "Description must be an object",
        }),
        uuid: joi.string().optional().messages({
          "string.guid": "UUID must be a valid UUID",
        }),
      })
    )
    .optional()
    .messages({
      "array.base": "My Stories must be an array",
    }),
  status: statusJoiValidation
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
  thumb_image: joi.string().optional().messages({
    "object.base": "Background image must be an object",
  }),
  title: joi.string().optional().messages({
    "object.base": "Title must be an object",
  }),
  sub_title: joi.string().optional().messages({
    "object.base": "Sub-title must be an object",
  }),
  description: joi.string().optional().messages({
    "object.base": "Description must be an object",
  }),
  my_stories: joi
    .array()
    .items(
      joi.object({
        image: joi.any().optional().messages({
          "string.base": "Image must be a string",
          "string.uri": "Image must be a valid URI",
        }),
        title: joi.string().optional().messages({
          "object.base": "Title must be an object",
        }),
        description: joi.string().optional().messages({
          "object.base": "Description must be an object",
        }),
        uuid: joi.string().optional().messages({
          "string.guid": "UUID must be a valid UUID",
        }),
      })
    )
    .optional()
    .messages({
      "array.base": "My Stories must be an array",
    }),
  status: statusJoiValidation
});
