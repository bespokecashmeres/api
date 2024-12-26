"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const fittingSizeOptionAllocationSchema = new mongoose.Schema({
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
  fittingSizeOptionId: {
    type: Types.ObjectId,
    ref: "fittingsizeoptions",
    required: true,
  },
});

const FittingSizeOptionAllocation = mongoose.model(
  "fittingsizeoptionallocation",
  fittingSizeOptionAllocationSchema
);

module.exports = FittingSizeOptionAllocation;
