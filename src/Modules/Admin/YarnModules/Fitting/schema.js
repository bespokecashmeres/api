"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const fittingSchema = new mongoose.Schema(
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

const Fitting = mongoose.model("fittings", fittingSchema);
module.exports = Fitting;
