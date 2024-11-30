"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const materialSchema = new mongoose.Schema(
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

const Material = mongoose.model("materials", materialSchema);
module.exports = Material;
