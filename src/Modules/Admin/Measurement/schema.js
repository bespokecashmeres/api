"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const measurementSchema = new Schema(
  {
    measurements: {
      type: Schema.Types.Array,
      require: true,
      default: []
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const measurement = mongoose.model("measurements", measurementSchema);
module.exports = measurement;
