"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const yarnSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      require: true,
    },
    yarnId: {
      type: Types.String,
      require: true,
    },
    yarns: [
      {
        name: Types.Object,
        value: Types.Object,
        description: Types.Object
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