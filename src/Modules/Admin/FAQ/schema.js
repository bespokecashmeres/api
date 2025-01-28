"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const faqSchema = new mongoose.Schema(
  {
    faqId:{
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

const FAQ = mongoose.model("faq", faqSchema);
module.exports = FAQ;
