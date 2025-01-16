"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const costCalculationsSchema = new mongoose.Schema({
  gauge: {
    type: Types.String,
  },
  size: {
    type: Types.String,
  },
  weightPerGram: {
    type: Types.Number,
  },
  knitWastage: {
    type: Types.Number,
  },
  manufacturingCost: {
    type: Types.Number,
  },
  trimsCost: {
    type: Types.Number,
  },
  laborCost: {
    type: Types.Number,
  },
});

const CostCalculations = mongoose.model("costcalculations", costCalculationsSchema);

module.exports = CostCalculations;
