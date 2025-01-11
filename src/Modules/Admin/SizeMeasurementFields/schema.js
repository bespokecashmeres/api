"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const sizeMeasurementFieldSchema = new mongoose.Schema({
  name: {
    type: Types.Object,
    required: true,
    default: {},
  },
  minRange: {
    type: Types.Number,
    default: 0
  },
  maxRange: {
    type: Types.Number,
    default: 0
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
});

const SizeMeasurementField = mongoose.model(
  "sizemeasurementfields",
  sizeMeasurementFieldSchema
);

module.exports = SizeMeasurementField;
