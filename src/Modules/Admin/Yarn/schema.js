"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const yarnSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      require: true,
    },
    image: {
      type: Types.String,
      default: "",
    },
    price: {
      type: Types.Number,
      default: 0,
    },
    genderId: {
      type: Types.ObjectId,
      ref: "genders",
      default: null,
    },
    // yarn origin
    countryId: {
      type: Types.ObjectId,
      ref: "countries",
      default: null,
    },
    yarnId: {
      type: Types.String,
      require: true,
      index: true,
    },
    colourId: {
      type: Types.ObjectId,
      ref: "colours",
      default: null,
    },
    patternId: {
      type: Types.ObjectId,
      ref: "patterns",
      default: null,
    },
    occassionId: {
      type: Types.ObjectId,
      ref: "occassions",
      default: null,
    },
    seasonalityId: {
      type: Types.ObjectId,
      ref: "seasonalities",
      default: null,
    },
    perceivedWeightId: {
      type: Types.ObjectId,
      ref: "perceivedweights",
      default: null,
    },
    fittingId: {
      type: Types.ObjectId,
      ref: "fittings",
      default: null,
    },
    materialId: {
      type: Types.ObjectId,
      ref: "materials",
      default: null,
    },
    yarns: [
      {
        image: Types.String,
        name: {
          type: Types.Object,
          default: {},
        },
        value: {
          type: Types.Object,
          default: {},
        },
        info: {
          type: Types.Object,
          default: {},
        },
      },
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
