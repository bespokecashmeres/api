"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const yarnSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      require: true,
    },
    // yarn origin
    countryId: {
      type: Types.ObjectId,
      ref: "countries",
      default: ""
    },
    yarnId: {
      type: Types.String,
      require: true,
    },
    colourId: {
      type: Types.ObjectId,
      ref: "colours",
      default: ""
    },
    patternId: {
      type: Types.ObjectId,
      ref: "patterns",
      default: ""
    },
    occassionId: {
      type: Types.ObjectId,
      ref: "occassions",
      default: ""
    },
    seasonalityId: {
      type: Types.ObjectId,
      ref: "seasonalities",
      default: ""
    },
    perceivedWeightId: {
      type: Types.ObjectId,
      ref: "perceivedweights",
      default: ""
    },
    fittingId: {
      type: Types.ObjectId,
      ref: "fittings",
      default: ""
    },
    materialId: {
      type: Types.ObjectId,
      ref: "materials",
      default: ""
    },
    priceRangeId: {
      type: Types.ObjectId,
      ref: "priceranges",
      default: ""
    },
    yarns: [
      {
        image: Types.String,
        name: {
          type: Types.Object,
          default: {}
        },
        value: {
          type: Types.Object,
          default: {}
        },
        info: {
          type: Types.Object,
          default: {}
        }
      }
    ],
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

const Yarn = mongoose.model("yarn", yarnSchema);
module.exports = Yarn;