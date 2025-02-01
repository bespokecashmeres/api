"use strict";
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;


const card4Schema = new mongoose.Schema({
  uuid: {
    type: Types.String,
    default: "",
  },
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
  uuid: {
    type: Types.String,
    default: "",
  },
  image: {
    type: Types.String,
  },
  button_text: {
    type: Types.Object,
    default: {},
  },
  button_link: {
    type: Types.String,
    default: "",
  },

});

// const card7Schema = new mongoose.Schema({
//   image: {
//     type: Types.String,
//     default: "",
//   },
//   title: {
//     type: Types.Object,
//     default: {},
//   },
//   description: {
//     type: Types.Object,
//     default: {},
//   },

// });

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
    },

    section2: {
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

    sectionNString:{
      title: {
        type: Types.Object,
        default: {},
      },
    },

    section3: [
      {
        uuid: {
        type: Types.String,
        default: "",
      },
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
      cards: [card4Schema],
    },

    section5: {
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
      // cards: [card7Schema],
    },



    section8: {
      title: {
        type: Types.Object,
        default: {},
      },
      card1:{
        uuid: {
          type: Types.String,
          default: "",
        },
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
        uuid: {
          type: Types.String,
          default: "",
        },
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
        uuid: {
          type: Types.String,
          default: "",
        },
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
