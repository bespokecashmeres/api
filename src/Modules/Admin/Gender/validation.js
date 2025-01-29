const Joi = require("joi");
const { createNameValidator, slugJoiValidation, updateNameValidator, slugJoiOptionalValidation } = require("../../../../utils/validation");

exports.createGenderValidator = createNameValidator.concat(
  Joi.object({
    slug: slugJoiValidation,
  })
)

exports.updateGenderValidator = updateNameValidator.concat(
  Joi.object({
    slug: slugJoiOptionalValidation,
  })
)
