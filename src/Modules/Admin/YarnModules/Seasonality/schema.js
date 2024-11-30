"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const seasonalitySchema = new mongoose.Schema(
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

const Seasonality = mongoose.model("seasonalities", seasonalitySchema);
module.exports = Seasonality;
