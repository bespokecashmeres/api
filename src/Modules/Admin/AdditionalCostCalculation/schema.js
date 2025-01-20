"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const additionalCostCalculationsSchema = new mongoose.Schema({
  slug: {
    type: Types.String,
    required: true,
    unique: true,
  },
  calculations: [
    {
      value: {
        type: Types.Number,
        required: true,
      },
      unit: {
        type: Types.String,
        required: true,
        enum: ["number", "percentage", "currency"],
      },
      operation: {
        type: Types.String,
        required: true,
        enum: ["increase", "decrease", "multiply", "divide"],
      },
    },
  ],
});

const AdditionalCostCalculations = mongoose.model("additionalcostcalculations", additionalCostCalculationsSchema);

module.exports = AdditionalCostCalculations;
