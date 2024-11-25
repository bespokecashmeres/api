"use strict";
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const Types = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    mainCategoryId: {
      type: Types.ObjectId,
      ref: "maincategories",
      required: true,
    },
    subCategoryId: {
      type: Types.ObjectId,
      ref: "subcategories",
    },
    childCategoryId: {
      type: Types.ObjectId,
      ref: "childcategories",
    },
    subChildCategoryId: {
      type: Types.ObjectId,
      ref: "subchildcategories",
    },
    productTypeId: {
      type: Types.ObjectId,
      ref: "producttypes",
      required: true,
    },
    name: {
      type: Types.Object,
      required: true,
      default: {},
    },
    price: {
      type: Types.Number,
      required: true,
    },
    discountedPrice: {
      type: Types.Number,
      default: null,
    },
    slug: {
      type: Types.String,
      required: true,
      unique: true,
    },
    genderId: {
      type: Types.ObjectId,
      ref: "genders",
      required: true,
    },
    sizeId: {
      type: Types.ObjectId,
      ref: "sizes",
      required: true,
    },
    relatedProducts: [
      {
        type: Types.ObjectId,
        ref: "products",
      },
    ],
    noOfQuantity: {
      type: Types.Number,
      required: true,
    },
    quantityDiscount: {
      type: Types.Number,
      default: 0,
    },
    colors: [
      {
        colorId: {
          type: Types.ObjectId,
          ref: "colors",
          required: true,
        },
        image: {
          type: Types.String,
          required: true,
        },
        images: [
          {
            type: Types.String,
          },
        ],
        description: {
          type: Types.Object,
          default: {},
        },
        yarnId: {
          type: Types.ObjectId,
          ref: "yarns",
          required: true,
        },
      },
    ],
    design: [
      {
        name: {
          type: Types.Object,
          required: true,
          default: {},
        },
        value: {
          type: Types.Object,
          required: true,
          default: {},
        },
        tooltip: {
          type: Types.Object,
          default: {},
        },
      },
    ],
    shippingAndReturnPolicy: {
      type: Types.Object,
      default: {},
    },
    rowOrder: {
      type: Types.Number,
      default: 0,
    },
    status: {
      type: Types.Boolean,
      enum: [true, false],
      default: true,
    },
  },
  { timestamps: true }
);

productSchema.pre("findOneAndUpdate", async function (next) {
  const SchemaModel = mongoose.model("products", productSchema);
  const filter = this.getFilter();
  const slug = this.get("slug");
  const result = await SchemaModel.findOne({
    $or: [{ slug }],
    _id: { $ne: filter._id },
  });
  if (result) {
    const errorField = serverResponseMessage.SLUG_EXISTS;
    const error = new Error(errorField);
    error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
    error.status = httpStatusCodes.BAD_REQUEST;
    return next(error);
  }
  next();
});

productSchema.pre("save", async function (next) {
  const SchemaModel = this.model("products");
  try {
    const result = await SchemaModel.findOne({
      $or: [{ slug: this.slug }],
    });
    if (result) {
      const errorField = serverResponseMessage.SLUG_EXISTS;
      const error = new Error(errorField);
      error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
      error.status = httpStatusCodes.BAD_REQUEST;
      return next(error);
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
