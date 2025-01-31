"use strict";
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../../config/message");
const { httpResponses } = require("../../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../../utils/http-status-codes");
const Types = mongoose.Schema.Types;

const materialSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      required: true,
      default: {},
    },
    slug: {
      type: Types.String,
      required: true,
      unique: true,
    },
    price: {
      type: Types.Number,
      required: true,
      default: 0
    },
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


materialSchema.pre("findOneAndUpdate", async function (next) {
  const SchemaModel = mongoose.model("materials", materialSchema);
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

materialSchema.pre("save", async function (next) {
  const SchemaModel = this.model("materials");
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


const Material = mongoose.model("materials", materialSchema);
module.exports = Material;
