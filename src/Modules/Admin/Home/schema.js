"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const cardSchema = new mongoose.Schema({
  bg_image: {
    type: Types.String,
    required: true,
  },
  title1: {
    type: Types.Object,
    required: true,
  },
  title2: {
    type: Types.Object,
    required: true,
  },
  button_text: {
    type: Types.Object,
    required: true,
  },
  button_link: {
    type: Types.String,
    required: true,
  },
});

const storyCardSchema = new mongoose.Schema({
  title: {
    type: Types.Object,
    required: true,
  },
  description: {
    type: Types.Object,
    required: true,
  },
  image: {
    type: Types.String,
    required: true,
  },
});

const section9firstSchema = new mongoose.Schema({
  image1: {
    type: Types.String,
    required: true,
  },
  image2: {
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
  button_text: {
    type: Types.Object,
    required: true,
  },
  button_link: {
    type: Types.String,
    required: true,
  },
});

const section9Schema = new mongoose.Schema({
  image: {
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
  button_text: {
    type: Types.Object,
    required: true,
  },
  button_link: {
    type: Types.String,
    required: true,
  },
});

const homeSchema = new mongoose.Schema(
  {
    section1: {
      title: {
        type: Types.Object,
        required: true,
      },
      bg_image: {
        type: Types.String,
        required: true,
      },
    },
    section2: {
      bg_image: {
        type: Types.String,
        required: true,
      },
      left_image: {
        type: Types.String,
        required: true,
      },
      title: {
        type: Types.Object,
        required: true,
      },
      description: {
        type: Types.Object,
        required: true,
      },
    },
    section3: {
      title: {
        type: Types.Object,
        required: true,
      },
    },
    section4: [
      {
        title: {
          type: Types.Object,
          required: true,
        },
        image: {
          type: Types.String,
          required: true,
        },
        image_link: {
          type: Types.String,
          required: true,
        },
      },
    ],
    section5: {
      title: {
        type: Types.Object,
        required: true,
      },
      description: {
        type: Types.Object,
        required: true,
      },
      cards: [cardSchema],
    },
    section6: {
      title: {
        type: Types.Object,
        required: true,
      },
    },
    section7: {
      title: {
        type: Types.Object,
        required: true,
      },
      cards: [
        {
          image: {
            type: Types.String,
            required: true,
          },
          button_text: {
            type: Types.Object,
            required: true,
          },
          button_link: {
            type: Types.String,
            required: true,
          },
        },
      ],
    },
    section8: {
      title: {
        type: Types.Object,
        required: true,
      },
      sub_title: {
        type: Types.Object,
        required: true,
      },
      cards: [storyCardSchema],
    },
    section9: {
      first_section: section9firstSchema,
      second_section: section9Schema,
      third_section: section9Schema,
    },
    section10: {
      bg_image: {
        type: Types.String,
        required: true,
      },
      left_image: {
        type: Types.String,
        required: true,
      },
      title: {
        type: Types.Object,
        required: true,
      },
      description: {
        type: Types.Object,
        required: true,
      },
      text_link: {
        type: Types.String,
        required: true,
      },
      url_link: {
        type: Types.String,
        required: true,
      },
    },
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

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;