"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const faqSchema = new mongoose.Schema(
  {
    slug:{
        type: Types.String,
        required: true
    },
    title: {
      type: Types.Object,
      require: true,
    },
    description: {
        type: Types.Object,
        require: true,
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

const FAQ = mongoose.model("faq", faqSchema);
module.exports = FAQ;
