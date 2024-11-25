"use strict";
const Joi = require("joi");
const {
  mainCategoryIdJoiValidation,
  mainCategoryIdJoiOptionalValidation,
  productTypeCategoryIdJoiValidation,
  subCategoryIdJoiOptionalValidation,
  childCategoryIdJoiOptionalValidation,
  subChildCategoryIdJoiOptionalValidation,
  productTypeCategoryIdJoiOptionalValidation,
  nameJoiOptionalValidation,
  priceJoiOptionalValidation,
  slugJoiOptionalValidation,
  genderJoiValidation,
  genderJoiOptionalValidation,
  sizeJoiValidation,
  sizeJoiOptionalValidation,
} = require("../../../../utils/validation");

exports.createValidator = Joi.object({
  mainCategoryId: mainCategoryIdJoiValidation,
  subCategoryId: subCategoryIdJoiOptionalValidation,
  childCategoryId: childCategoryIdJoiOptionalValidation,
  subChildCategoryId: subChildCategoryIdJoiOptionalValidation,
  productTypeId: productTypeCategoryIdJoiValidation,
  genderId: genderJoiValidation,
  sizeId: sizeJoiValidation,
  name: Joi.string().required(),
  price: Joi.number().required(),
  discountedPrice: Joi.number().optional(),
  slug: Joi.string().required(),
  noOfQuantity: Joi.number().required(),
  quantityDiscount: Joi.number().required(),
  shippingAndReturnPolicy: Joi.string().required(),
  relatedProducts: Joi.array().items(Joi.string()).optional(),
  design: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      value: Joi.string().required(),
      tooltip: Joi.string().optional(),
    })
  ).required(),
  colors: Joi.array().items(
    Joi.object({
      colorId: Joi.string().required(),
      description: Joi.string().required(),
      yarnId: Joi.string().required(),
      image: Joi.any().optional(),
      images: Joi.array().items(Joi.any()).optional(),
    })
  ).required(),
});

exports.updateValidator = Joi.object({
  _id: Joi.string().hex().length(24).required(),
  mainCategoryId: mainCategoryIdJoiOptionalValidation,
  subCategoryId: subCategoryIdJoiOptionalValidation,
  childCategoryId: childCategoryIdJoiOptionalValidation,
  subChildCategoryId: subChildCategoryIdJoiOptionalValidation,
  productTypeId: productTypeCategoryIdJoiOptionalValidation,
  genderId: genderJoiOptionalValidation,
  sizeId: sizeJoiOptionalValidation,
  name: Joi.string().optional(),
  price: Joi.number().optional(),
  discountedPrice: Joi.number().optional(),
  slug: Joi.string().optional(),
  noOfQuantity: Joi.number().optional(),
  quantityDiscount: Joi.number().optional(),
  shippingAndReturnPolicy: Joi.string().optional(),
  relatedProducts: Joi.array().items(Joi.string()).optional(),
  design: Joi.array().items(
    Joi.object({
      name: Joi.string().optional(),
      value: Joi.string().optional(),
      tooltip: Joi.string().optional(),
    })
  ).optional(),
  colors: Joi.array().items(
    Joi.object({
      colorId: Joi.string().optional(),
      description: Joi.string().optional(),
      yarnId: Joi.string().optional(),
      image: Joi.any().optional(),
      images: Joi.array().items(Joi.any()).optional(),
    })
  ).optional(),
  colorsImages: Joi.string().optional()
});

exports.relatedProductsValidator = Joi.object({
  _id: Joi.string().hex().length(24).optional(),
});
