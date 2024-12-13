"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const stepTypeSchema = new mongoose.Schema({
  name: {
    type: Types.Object,
    required: true,
    default: {},
  },
  info: {
    type: Types.Object,
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
});

const StepType = mongoose.model("steptypes", stepTypeSchema);

module.exports = StepType;
