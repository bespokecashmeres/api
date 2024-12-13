"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const stepCardSchema = new mongoose.Schema({
  title: {
    type: Types.Object,
    required: true,
  },
  description: {
    type: Types.Object,
    required: true,
  },
  graphImage: {
    type: Types.String,
  },
  realImage: {
    type: Types.String,
  },
  status: {
    type: Types.Boolean,
    enum: [true, false],
    default: true,
  },
  rowOrder: {
    type: Types.Number,
    default: 0,
  },
  stepTypeId: {
    type: Types.ObjectId,
    ref: "steptypes",
    required: true,
  }
}, {
  timestamps: true,
});

const StepCard = mongoose.model('stepcards', stepCardSchema);

module.exports = StepCard;
