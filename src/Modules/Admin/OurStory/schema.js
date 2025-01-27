"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const ourStorySchema = new mongoose.Schema(
  {
    bg_image: {
      type: Types.String,
      default:""
    },
    thumb_image: {
      type: Types.String,
      default:""
    },
    title: {
      type: Types.Object,
      default: {},
    },
    sub_title: {
      type: Types.Object,
      default: {},
    },
    description:{
      type: Types.Object,
      default: {},
    },
    my_stories: [
      {

        uuid: {
          type: Types.String,
          default: "",
        },
        image:{
          type: Types.String,
          default:""

        },
        title: {
          type: Types.Object,
          default: {},
        },
        description: {
          type: Types.Object,
          default: {},
        }
        
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
