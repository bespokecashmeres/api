"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const sizeMeasuremenSchema = new mongoose.Schema({
  value: {
    type: Types.Number,
    required: true,
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
  stepTypeId: {
    type: Types.ObjectId,
    ref: "steptypes",
    required: true,
  },
  stepCardId: {
    type: Types.ObjectId,
    ref: "stepcards",
    required: true,
  },
  fittingSizeId: {
    type: Types.ObjectId,
    ref: "fittingsizes",
    required: true,
  },
  sizeMeasurementFieldId: {
    type: Types.ObjectId,
    ref: "sizemeasurementfields",
    required: true,
  },
});

const sizeMeasurement = mongoose.model(
  "sizemeasurements",
  sizeMeasuremenSchema
);

module.exports = sizeMeasurement;
