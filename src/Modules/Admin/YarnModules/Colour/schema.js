"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const colourSchema = new mongoose.Schema(
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

const Colour = mongoose.model("colours", colourSchema);
module.exports = Colour;
