"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const fabricsSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      require: true,
    },
    fabricId: {
      type: Types.String,
      require: true,
    },
    fabrics: [
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

const Fabrics = mongoose.model("fabrics", fabricsSchema);
module.exports = Fabrics;