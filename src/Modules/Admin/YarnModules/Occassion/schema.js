"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const occassionSchema = new mongoose.Schema(
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

const Occassion = mongoose.model("occassions", occassionSchema);
module.exports = Occassion;
