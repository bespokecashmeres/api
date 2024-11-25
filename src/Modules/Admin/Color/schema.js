"use strict";
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const Types = mongoose.Schema.Types;

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      required: true,
      default: {},
    },
    code: {
      type: Types.String,
      required: true,
      trim: true,
      unique: true,
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

colorSchema.pre("findOneAndUpdate", async function (next) {
  const SchemaModel = mongoose.model("colors", colorSchema);
  const filter = this.getFilter();
  const code = this.get("code");
  const result = await SchemaModel.findOne({
    $or: [{ code }],
    _id: { $ne: filter._id },
  });
  if (result) {
    const errorField = serverResponseMessage.COLOR_EXISTS;
    const error = new Error(errorField);
    error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
    error.status = httpStatusCodes.BAD_REQUEST;
    return next(error);
  }
  next();
});

colorSchema.pre("save", async function (next) {
  const SchemaModel = this.model("colors");
  try {
    const result = await SchemaModel.findOne({
      $or: [{ code: this.code }],
    });
    if (result) {
      const errorField = serverResponseMessage.COLOR_EXISTS;
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

const Color = mongoose.model("colors", colorSchema);
module.exports = Color;
