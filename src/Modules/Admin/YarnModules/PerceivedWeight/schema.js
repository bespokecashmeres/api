"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const perceivedWeightSchema = new mongoose.Schema(
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

const PerceivedWeight = mongoose.model(
  "perceivedweights",
  perceivedWeightSchema
);
module.exports = PerceivedWeight;
