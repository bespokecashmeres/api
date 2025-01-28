"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: Types.Object,
      require: true,
    },
    description: {
      type: Types.Object,
      require: true,
    },

    bg_image: {
      type: Types.String,
      default: "",
    },

    //gender Id
    genderId: {
      type: Types.ObjectId,
      ref: "genders",
      default: null,
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

const Banner = mongoose.model("banner", bannerSchema);
module.exports = Banner;
