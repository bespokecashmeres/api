"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const ourStorySchema = new mongoose.Schema(
  {
    bg_image: {
      type: Types.String,
      required: true,
    },
    title: {
      type: Types.Object,
      required: true,
    },
    sub_title: {
      type: Types.Object,
      required: true,
    },
    description: {
      type: Types.Object,
      required: true,
    },
    my_stories: [
      {
        image: Types.String,
        title: {
          type: Types.Object,
          default: {},
        },
        description: {
          type: Types.Object,
          default: {},
        },
        uuid: {
          type: Types.String,
          default: "",
        },
      },
    ],
    status: {
      type: Types.Boolean,
      enum: [true, false],
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const OurStory = mongoose.model("OurStory", ourStorySchema);
module.exports = OurStory;
