"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const translationSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
}, { _id: false });

const lookBookSchema = new Schema({
  title: {
    type: [translationSchema],
    required: true
  },
  description: {
    type: [translationSchema],
    required: true
  },
  image: {
    type: Schema.Types.String,
  },
  pdf: {
    type: Schema.Types.String,
  },
  status: {
    type: Schema.Types.Boolean,
    enum: [true, false],
    default: true,
  },
  rowOrder: {
    type: Schema.Types.Number,
    default: 0
  }
}, {
  timestamps: true
});

const LookBook = mongoose.model('lookbook', lookBookSchema);

module.exports = LookBook;