"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const sizeSchema = new mongoose.Schema(
  {
    productTypeId: {
      type: Types.ObjectId,
      ref: "producttypes",
      require: true,
    },
    sizes: [
      {
        sectionName: {
          type: Types.Object,
          require: true,
        },
        info: {
          type: Types.Object,
          default: {},
        },
        fields: [
          {
            value: {
              type: Types.Object,
              required: true,
              default: {},
            },
            label: {
              type: Types.Object,
              default: {},
            },
          },
        ],
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

const Size = mongoose.model("size", sizeSchema);
module.exports = Size;
