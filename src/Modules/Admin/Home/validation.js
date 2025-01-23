const joi = require("joi");

exports.createHomeValidation = joi.object({
  section1: joi.object({
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
    bg_image: joi.string().required().messages({
      "string.base": "Background image must be a string",
      "any.required": "Background image is required",
    }),
  }).required().messages({
    "object.base": "Section 1 must be an object",
    "any.required": "Section 1 is required",
  }),
  
  section2: joi.object({
    bg_image: joi.string().required().messages({
      "string.base": "Background image must be a string",
      "any.required": "Background image is required",
    }),
    left_image: joi.string().required().messages({
      "string.base": "Left image must be a string",
      "any.required": "Left image is required",
    }),
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
    description: joi.object().required().messages({
      "object.base": "Description must be an object",
      "any.required": "Description is required",
    }),
  }).required().messages({
    "object.base": "Section 2 must be an object",
    "any.required": "Section 2 is required",
  }),

  section3: joi.object({
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
  }).required().messages({
    "object.base": "Section 3 must be an object",
    "any.required": "Section 3 is required",
  }),

  section4: joi.array().items(
    joi.object({
      title: joi.object().required().messages({
        "object.base": "Title must be an object",
        "any.required": "Title is required",
      }),
      image: joi.string().required().messages({
        "string.base": "Image must be a string",
        "any.required": "Image is required",
      }),
      image_link: joi.string().required().messages({
        "string.base": "Image link must be a string",
        "any.required": "Image link is required",
      }),
    })
  ).required().messages({
    "array.base": "Section 4 must be an array",
    "any.required": "Section 4 is required",
  }),

  section5: joi.object({
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
    description: joi.object().required().messages({
      "object.base": "Description must be an object",
      "any.required": "Description is required",
    }),
    cards: joi.array().items(
      joi.object({
        bg_image: joi.string().required().messages({
          "string.base": "Background image must be a string",
          "any.required": "Background image is required",
        }),
        title1: joi.object().required().messages({
          "object.base": "Title1 must be an object",
          "any.required": "Title1 is required",
        }),
        title2: joi.object().required().messages({
          "object.base": "Title2 must be an object",
          "any.required": "Title2 is required",
        }),
        button_text: joi.object().required().messages({
          "object.base": "Button text must be an object",
          "any.required": "Button text is required",
        }),
        button_link: joi.string().required().messages({
          "string.base": "Button link must be a string",
          "any.required": "Button link is required",
        }),
      })
    ).required().messages({
      "array.base": "Cards must be an array",
      "any.required": "Cards are required",
    }),
  }).required().messages({
    "object.base": "Section 5 must be an object",
    "any.required": "Section 5 is required",
  }),

  section6: joi.object({
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
  }).required().messages({
    "object.base": "Section 6 must be an object",
    "any.required": "Section 6 is required",
  }),

  section7: joi.object({
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
    cards: joi.array().items(
      joi.object({
        image: joi.string().required().messages({
          "string.base": "Image must be a string",
          "any.required": "Image is required",
        }),
        button_text: joi.object().required().messages({
          "object.base": "Button text must be an object",
          "any.required": "Button text is required",
        }),
        button_link: joi.string().required().messages({
          "string.base": "Button link must be a string",
          "any.required": "Button link is required",
        }),
      })
    ).required().messages({
      "array.base": "Cards must be an array",
      "any.required": "Cards are required",
    }),
  }).required().messages({
    "object.base": "Section 7 must be an object",
    "any.required": "Section 7 is required",
  }),

  section8: joi.object({
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
    sub_title: joi.object().required().messages({
      "object.base": "Sub-title must be an object",
      "any.required": "Sub-title is required",
    }),
    cards: joi.array().items(
      joi.object({
        title: joi.object().required().messages({
          "object.base": "Title must be an object",
          "any.required": "Title is required",
        }),
        description: joi.object().required().messages({
          "object.base": "Description must be an object",
          "any.required": "Description is required",
        }),
        image: joi.string().required().messages({
          "string.base": "Image must be a string",
          "any.required": "Image is required",
        }),
      })
    ).required().messages({
      "array.base": "Cards must be an array",
      "any.required": "Cards are required",
    }),
  }).required().messages({
    "object.base": "Section 8 must be an object",
    "any.required": "Section 8 is required",
  }),

  section9: joi.object({
    first_section: joi.object({
      image1: joi.string().required().messages({
        "string.base": "Image1 must be a string",
        "any.required": "Image1 is required",
      }),
      image2: joi.string().required().messages({
        "string.base": "Image2 must be a string",
        "any.required": "Image2 is required",
      }),
      title: joi.object().required().messages({
        "object.base": "Title must be an object",
        "any.required": "Title is required",
      }),
      sub_title: joi.object().required().messages({
        "object.base": "Sub-title must be an object",
        "any.required": "Sub-title is required",
      }),
      description: joi.object().required().messages({
        "object.base": "Description must be an object",
        "any.required": "Description is required",
      }),
      button_text: joi.object().required().messages({
        "object.base": "Button text must be an object",
        "any.required": "Button text is required",
      }),
      button_link: joi.string().required().messages({
        "string.base": "Button link must be a string",
        "any.required": "Button link is required",
      }),
    }).required().messages({
      "object.base": "First section must be an object",
      "any.required": "First section is required",
    }),
    second_section: joi.object({
      image: joi.string().required().messages({
        "string.base": "Image1 must be a string",
        "any.required": "Image1 is required",
      }),
      title: joi.object().required().messages({
        "object.base": "Title must be an object",
        "any.required": "Title is required",
      }),
      sub_title: joi.object().required().messages({
        "object.base": "Sub-title must be an object",
        "any.required": "Sub-title is required",
      }),
      description: joi.object().required().messages({
        "object.base": "Description must be an object",
        "any.required": "Description is required",
      }),
      button_text: joi.object().required().messages({
        "object.base": "Button text must be an object",
        "any.required": "Button text is required",
      }),
      button_link: joi.string().required().messages({
        "string.base": "Button link must be a string",
        "any.required": "Button link is required",
      }),
    }).required().messages({
      "object.base": "Second section must be an object",
      "any.required": "Second section is required",
    }),
    third_section: joi.object({
      image: joi.string().required().messages({
        "string.base": "Image1 must be a string",
        "any.required": "Image1 is required",
      }),
      title: joi.object().required().messages({
        "object.base": "Title must be an object",
        "any.required": "Title is required",
      }),
      sub_title: joi.object().required().messages({
        "object.base": "Sub-title must be an object",
        "any.required": "Sub-title is required",
      }),
      description: joi.object().required().messages({
        "object.base": "Description must be an object",
        "any.required": "Description is required",
      }),
      button_text: joi.object().required().messages({
        "object.base": "Button text must be an object",
        "any.required": "Button text is required",
      }),
      button_link: joi.string().required().messages({
        "string.base": "Button link must be a string",
        "any.required": "Button link is required",
      }),
    }).required().messages({
      "object.base": "Third section must be an object",
      "any.required": "Third section is required",
    }),
  }).required().messages({
    "object.base": "Section 9 must be an object",
    "any.required": "Section 9 is required",
  }),

  section10: joi.object({
    bg_image: joi.string().required().messages({
      "string.base": "Background image must be a string",
      "any.required": "Background image is required",
    }),
    left_image: joi.string().required().messages({
      "string.base": "Left image must be a string",
      "any.required": "Left image is required",
    }),
    title: joi.object().required().messages({
      "object.base": "Title must be an object",
      "any.required": "Title is required",
    }),
    description: joi.object().required().messages({
      "object.base": "Description must be an object",
      "any.required": "Description is required",
    }),
    text_link: joi.string().required().messages({
      "string.base": "Text link must be a string",
      "any.required": "Text link is required",
    }),
    url_link: joi.string().required().messages({
      "string.base": "URL link must be a string",
      "any.required": "URL link is required",
    }),
  }).required().messages({
    "object.base": "Section 10 must be an object",
    "any.required": "Section 10 is required",
  }),

  // Optionally, you can add a status field if needed
  status: joi.boolean().optional().messages({
    "boolean.base": "Status must be a boolean",
  }),
});



exports.updateHomeValidation = joi.object({
  _id: joi.string().hex().length(24).required().messages({
    "string.base": "ID must be a string",
    "string.hex": "ID must be a valid hexadecimal string",
    "string.length": "ID must be exactly 24 characters long",
    "any.required": "ID is required",
  }),

  section1: joi.object({
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
    bg_image: joi.string().optional().messages({
      "string.base": "Background image must be a string",
    }),
  }).optional().messages({
    "object.base": "Section 1 must be an object",
  }),

  section2: joi.object({
    bg_image: joi.string().optional().messages({
      "string.base": "Background image must be a string",
    }),
    left_image: joi.string().optional().messages({
      "string.base": "Left image must be a string",
    }),
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
    description: joi.object().optional().messages({
      "object.base": "Description must be an object",
    }),
  }).optional().messages({
    "object.base": "Section 2 must be an object",
  }),

  section3: joi.object({
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
  }).optional().messages({
    "object.base": "Section 3 must be an object",
  }),

  section4: joi.array().items(
    joi.object({
      title: joi.object().optional().messages({
        "object.base": "Title must be an object",
      }),
      image: joi.string().optional().messages({
        "string.base": "Image must be a string",
      }),
      image_link: joi.string().optional().messages({
        "string.base": "Image link must be a string",
      }),
    })
  ).optional().messages({
    "array.base": "Section 4 must be an array",
  }),

  section5: joi.object({
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
    description: joi.object().optional().messages({
      "object.base": "Description must be an object",
    }),
    cards: joi.array().items(
      joi.object({
        bg_image: joi.string().optional().messages({
          "string.base": "Background image must be a string",
        }),
        title1: joi.object().optional().messages({
          "object.base": "Title1 must be an object",
        }),
        title2: joi.object().optional().messages({
          "object.base": "Title2 must be an object",
        }),
        button_text: joi.object().optional().messages({
          "object.base": "Button text must be an object",
        }),
        button_link: joi.string().optional().messages({
          "string.base": "Button link must be a string",
        }),
      })
    ).optional().messages({
      "array.base": "Cards must be an array",
    }),
  }).optional().messages({
    "object.base": "Section 5 must be an object",
  }),

  section6: joi.object({
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
  }).optional().messages({
    "object.base": "Section 6 must be an object",
  }),

  section7: joi.object({
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
    cards: joi.array().items(
      joi.object({
        image: joi.string().optional().messages({
          "string.base": "Image must be a string",
        }),
        button_text: joi.object().optional().messages({
          "object.base": "Button text must be an object",
        }),
        button_link: joi.string().optional().messages({
          "string.base": "Button link must be a string",
        }),
      })
    ).optional().messages({
      "array.base": "Cards must be an array",
    }),
  }).optional().messages({
    "object.base": "Section 7 must be an object",
  }),

  section8: joi.object({
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
    sub_title: joi.object().optional().messages({
      "object.base": "Sub-title must be an object",
    }),
    cards: joi.array().items(
      joi.object({
        title: joi.object().optional().messages({
          "object.base": "Title must be an object",
        }),
        description: joi.object().optional().messages({
          "object.base": "Description must be an object",
        }),
        image: joi.string().optional().messages({
          "string.base": "Image must be a string",
        }),
      })
    ).optional().messages({
      "array.base": "Cards must be an array",
    }),
  }).optional().messages({
    "object.base": "Section 8 must be an object",
  }),

  section9: joi.object({
    first_section: joi.object({
      image1: joi.string().optional().messages({
        "string.base": "Image1 must be a string",
      }),
      image2: joi.string().optional().messages({
        "string.base": "Image2 must be a string",
      }),
      title: joi.object().optional().messages({
        "object.base": "Title must be an object",
      }),
      sub_title: joi.object().optional().messages({
        "object.base": "Sub-title must be an object",
      }),
      description: joi.object().optional().messages({
        "object.base": "Description must be an object",
      }),
      button_text: joi.object().optional().messages({
        "object.base": "Button text must be an object",
      }),
      button_link: joi.string().optional().messages({
        "string.base": "Button link must be a string",
      }),
    }).optional().messages({
      "object.base": "First section must be an object",
    }),
    second_section: joi.object({
      image: joi.string().optional().messages({
        "string.base": "Image must be a string",
      }),
      title: joi.object().optional().messages({
        "object.base": "Title must be an object",
      }),
      sub_title: joi.object().optional().messages({
        "object.base": "Sub-title must be an object",
      }),
      description: joi.object().optional().messages({
        "object.base": "Description must be an object",
      }),
      button_text: joi.object().optional().messages({
        "object.base": "Button text must be an object",
      }),
      button_link: joi.string().optional().messages({
        "string.base": "Button link must be a string",
      }),
    }).optional().messages({
      "object.base": "Second section must be an object",
    }),
    third_section: joi.object({
      image: joi.string().optional().messages({
        "string.base": "Image must be a string",
      }),
      title: joi.object().optional().messages({
        "object.base": "Title must be an object",
      }),
      sub_title: joi.object().optional().messages({
        "object.base": "Sub-title must be an object",
      }),
      description: joi.object().optional().messages({
        "object.base": "Description must be an object",
      }),
      button_text: joi.object().optional().messages({
        "object.base": "Button text must be an object",
      }),
      button_link: joi.string().optional().messages({
        "string.base": "Button link must be a string",
      }),
    }).optional().messages({
      "object.base": "Third section must be an object",
    }),
  }).optional().messages({
    "object.base": "Section 9 must be an object",
  }),

  section10: joi.object({
    bg_image: joi.string().optional().messages({
      "string.base": "Background image must be a string",
    }),
    left_image: joi.string().optional().messages({
      "string.base": "Left image must be a string",
    }),
    title: joi.object().optional().messages({
      "object.base": "Title must be an object",
    }),
    description: joi.object().optional().messages({
      "object.base": "Description must be an object",
    }),
    text_link: joi.string().optional().messages({
      "string.base": "Text link must be a string",
    }),
    url_link: joi.string().optional().messages({
      "string.base": "URL link must be a string",
    }),
  }).optional().messages({
    "object.base": "Section 10 must be an object",
  }),

  status: joi.boolean().optional().messages({
    "boolean.base": "Status must be a boolean",
  }),
});