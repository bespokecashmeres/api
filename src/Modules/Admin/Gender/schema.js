"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const genderSchema = new mongoose.Schema(
  {
    name: {
      type: Types.Object,
      require: true,
      default: {}
    },
    status: {
      type: Types.Boolean,
      enum: [true, false],
      default: true,
    },
    slug: {
      type: Types.String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gender = mongoose.model("genders", genderSchema);
module.exports = Gender;
