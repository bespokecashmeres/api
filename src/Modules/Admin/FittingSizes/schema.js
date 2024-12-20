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

const FittingSizes = mongoose.model("fittingsizes", fittingSizesSchema);
module.exports = FittingSizes;
