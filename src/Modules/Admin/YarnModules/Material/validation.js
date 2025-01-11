const Joi = require("joi");
const { statusJoiValidation, slugJoiValidation, slugJoiOptionalValidation } = require("../../../../../utils/validation");

exports.createNameSlugValidator = Joi.object({
    name: Joi.string().required(),
    slug: slugJoiValidation,
    price: Joi.number().required(),
    status: statusJoiValidation,
});

exports.updateNameSlugValidator = Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    slug: slugJoiOptionalValidation,
    status: statusJoiValidation,
    _id: Joi.string().hex().length(24).required(),
});