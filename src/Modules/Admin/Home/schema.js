"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;


const cardSchema = new mongoose.Schema({
  bg_image: {
    type: Types.String,
  },
  title1: {
    type: Types.Object,
    default: {},
  },
  title2: {
    type: Types.Object,
    default: {},
  },
  button_text: {
    type: Types.Object,
    default: {},
  },
  button_link: {
    type: Types.String,
  },
});

const card6Schema = new mongoose.Schema({
  image: {
    type: Types.String,
  },
  title: {
    type: Types.Object,
    default: {},
  },
  description: {
    type: Types.Object,
    default: {},
  },

});

const card7Schema = new mongoose.Schema({
  image: {
    type: Types.String,
  },
  title: {
    type: Types.Object,
    default: {},
  },
  description: {
    type: Types.Object,
    default: {},
  },

});

const homeSchema = new mongoose.Schema(
  {
    section1: {
      title: {
        type: Types.Object,
        default: {},
      },
      bg_image: {
        type: Types.String,
      },
      uuid: {
        type: Types.String,
        default: "",
      },
    },

    section2: {
      uuid: {
        type: Types.String,
        default: "",
      },
      bg_image: {
        type: Types.String,
      },
      left_image: {
        type: Types.String,
      },
      title: {
        type: Types.Object,
        default: {},
      },
      description: {
        type: Types.Object,
        default: {},
      },
    },

    section3: [
      {
        title: {
          type: Types.Object,
          default: {},
        },
        image: {
          type: Types.String,
        },
        image_link: {
          type: Types.String,
        },
      },
    ],

    section4: {
      title: {
        type: Types.Object,
        default: {},
      },
      description: {
        type: Types.Object,
        default: {},
      },
      cards: [cardSchema],
    },

    section5: {
      uuid: {
        type: Types.String,
        default: "",
      },
      title: {
        type: Types.Object,
        default: {},
      },
    },



    section6: {
      title: {
        type: Types.Object,
        default: {},
      },
      cards: [card6Schema],
    },

    section7: {
      title: {
        type: Types.Object,
        default: {},
      },
      sub_title: {
        type: Types.Object,
        default: {},
      },
      cards: [card7Schema],
    },



    section8: {
      title: {
        type: Types.Object,
        default: {},
      },
      card1:{
        first_image: {
          type: Types.String,
        },
        second_image: {
          type: Types.String,
        },
        title: {
          type: Types.Object,
          default: {},
        },
        sub_title: {
          type: Types.Object,
          default: {},
        },
        description: {
          type: Types.Object,
          default: {},
        },
        button_text: {
          type: Types.Object,
          default: {},
        },
        button_link:Types.String
      },
      card2:{
        image: {
          type: Types.String,
        },
        title: {
          type: Types.Object,
          default: {},
        },
        sub_title: {
          type: Types.Object,
          default: {},
        },
        description: {
          type: Types.Object,
          default: {},
        },
        button_text: {
          type: Types.Object,
          default: {},
        },
        button_link:Types.String
      },
      card3:{
        image: {
          type: Types.String,
        },
        title: {
          type: Types.Object,
          default: {},
        },
        sub_title: {
          type: Types.Object,
          default: {},
        },
        description: {
          type: Types.Object,
          default: {},
        },
        button_text: {
          type: Types.Object,
          default: {},
        },
        button_link:Types.String
      },
    },

    section9: {
      uuid: {
        type: Types.String,
        default: "",
      },
      bg_image: {
        type: Types.String,
      },
      left_image: {
        type: Types.String,
      },
      title: {
        type: Types.Object,
        default: {},
      },
      description: {
        type: Types.Object,
        default: {},
      },
      link_text: {
        type: Types.Object,
        default: {},
      },
      link_url: {
        type: Types.String
      }
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
