const Joi = require("joi");
const { listValidator } = require("../../../../utils/validation");

exports.productListValidator = listValidator.concat(
  Joi.object({
    genderSlug: Joi.string().optional()
  })
)
