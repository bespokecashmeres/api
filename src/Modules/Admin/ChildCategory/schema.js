"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const childCategorySchema = new mongoose.Schema({
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
    ref: "genders",
    required: true,
  },
  mainCategoryId: {
    type: Types.ObjectId,
    ref: "maincategories",
    required: true,
  },
  subCategoryId: {
    type: Types.ObjectId,
    ref: "subcategories",
    required: true,
  }
});

const ChildCategory = mongoose.model("childcategories", childCategorySchema);

module.exports = ChildCategory;
