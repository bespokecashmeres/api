"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const fittingSizesSchema = new mongoose.Schema(
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


fittingSizesSchema.pre("findOneAndUpdate", async function (next) {
  const SchemaModel = mongoose.model("fittingsizes", fittingSizesSchema);
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

fittingSizesSchema.pre("save", async function (next) {
  const SchemaModel = this.model("fittingsizes");
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


const FittingSizes = mongoose.model("fittingsizes", fittingSizesSchema);
module.exports = FittingSizes;
