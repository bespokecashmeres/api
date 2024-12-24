"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const fittingSizeOptionsSchema = new mongoose.Schema({
  name: {
    type: Types.Object,
    required: true,
    default: {},
  },
  rowOrder: {
    type: Types.Number,
    default: 0,
  },
  status: {
    type: Types.Boolean,
    default: true,
  },
  productTypeId: {
    type: Types.ObjectId,
    ref: "producttypes",
    required: true,
  },
  fittingSizeId: {
    type: Types.ObjectId,
    ref: "fittingsizes",
    required: true,
  },
});

const FittingSizeOptions = mongoose.model(
  "fittingsizeoptions",
  fittingSizeOptionsSchema
);

module.exports = FittingSizeOptions;
