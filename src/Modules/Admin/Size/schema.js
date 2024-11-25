"use strict";
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const Types = mongoose.Schema.Types;
const { ObjectId } = require("mongoose").Types;

const sizeSchema = new mongoose.Schema(
  {
    productTypeId: {
      type: Types.ObjectId,
      ref: "producttypes",
      require: true,
      unique: true,
    },
    sizes: [
      {
        sectionName: {
          type: Types.Object,
          require: true,
        },
        info: {
          type: Types.Object,
          default: {},
        },
        fields: [
          {
            value: {
              type: Types.Object,
              required: true,
              default: {},
            },
            label: {
              type: Types.Object,
              default: {},
            },
          },
        ],
      },
    ],
    status: {
      type: Types.Boolean,
      enum: [true, false],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

sizeSchema.pre("findOneAndUpdate", async function (next) {
  const SchemaModel = mongoose.model("sizes", sizeSchema);
  const filter = this.getFilter();
  const productTypeId = this.get("productTypeId");
  const result = await SchemaModel.findOne({
    $or: [{ productTypeId: new ObjectId(productTypeId) }],
    _id: { $ne: filter._id },
  });
  if (result) {
    const errorField = serverResponseMessage.PRODUCT_TYPE_EXISTS;
    const error = new Error(errorField);
    error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
    error.status = httpStatusCodes.BAD_REQUEST;
    return next(error);
  }
  next();
});

sizeSchema.pre("save", async function (next) {
  const SchemaModel = this.model("sizes");
  try {
    const result = await SchemaModel.findOne({
      $or: [{ productTypeId: new ObjectId(this.productTypeId) }],
    });
    if (result) {
      const errorField = serverResponseMessage.PRODUCT_TYPE_EXISTS;
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

const Size = mongoose.model("size", sizeSchema);
module.exports = Size;
