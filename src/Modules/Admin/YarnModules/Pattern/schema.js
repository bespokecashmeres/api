"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const patternSchema = new mongoose.Schema(
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

const Pattern = mongoose.model("patterns", patternSchema);
module.exports = Pattern;
