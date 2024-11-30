"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const priceRangesSchema = new mongoose.Schema(
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

const PriceRanges = mongoose.model("priceranges", priceRangesSchema);
module.exports = PriceRanges;
