"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const mainCategorySchema = new mongoose.Schema({
  name: {
    type: Types.Object,
    required: true,
    default: {},
  },
  description: {
    type: Types.Object,
    default: {},
  },
  slug: {
    type: Types.String,
    required: true,
    trim: true,
  },
  image: {
    type: Types.String,
    required: true,
  },
  rowOrder: {
    type: Types.Number,
    default: 0,
  },
  status: {
    type: Types.Boolean,
    default: true,
  },
  genderId: {
    type: Types.ObjectId,
    ref: "Gender",
    required: true,
  },
});

const MainCategory = mongoose.model("mainCategory", mainCategorySchema);

module.exports = MainCategory;
