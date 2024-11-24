"use strict";
const mongoose = require("mongoose");
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

const Color = mongoose.model("color", colorSchema);
module.exports = Color;
