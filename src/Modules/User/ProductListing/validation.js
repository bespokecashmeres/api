const Joi = require("joi");
const { listValidator } = require("../../../../utils/validation");

exports.productListValidator = listValidator.concat(
  Joi.object({
    genderSlug: Joi.string().optional()
  })
)

exports.productPriceBySlugValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  size: Joi.string().default("xs").optional(),
})
