"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const productTypeSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      require: true,
    },
    description: {
      type: Types.Object,
      require: true,
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

const ProductType = mongoose.model("producttypes", productTypeSchema);
module.exports = ProductType;
