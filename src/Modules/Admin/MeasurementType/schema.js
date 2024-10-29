"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const measurementTypeSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    fields: [
      {
        name: {
          type: Schema.Types.String,
          required: true,
        },
        _id: {
          type: Schema.Types.ObjectId,
          auto: true,
        },
      }
    ],
    status: {
      type: Schema.Types.Boolean,
      enum: [true, false],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const measurementType = mongoose.model(
  "measurementtype",
  measurementTypeSchema
);
module.exports = measurementType;
