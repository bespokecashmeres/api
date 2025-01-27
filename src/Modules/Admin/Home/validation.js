const Joi = require("joi");
const { statusJoiValidation } = require("../../../../utils/validation");

// Validation for homeSchema
const CreateHomeValidation = Joi.object({
  section1: Joi.object({
    title: Joi.object().default({}).required(), // Matches the schema's default
    bg_image: Joi.any().optional(),
    uuid: Joi.string().default("").required(),
  }).optional(),

  section2: Joi.object({
    uuid: Joi.string().default("").required(),
    bg_image: Joi.any().optional(),
    left_image: Joi.string().optional(),
    title: Joi.object().default({}).required(),
    description: Joi.object().default({}).required(),
  }).optional(),

  section3: Joi.array()
  .items(
    Joi.object({
      uuid: Joi.string().default("").required(),
      title: Joi.object().default({}).optional(),
      image: Joi.any().optional(),
      image_link: Joi.string().optional(),
    })
  )
  .optional(),

  section4: Joi.object({
    title: Joi.object().default({}).required(),
    description: Joi.object().default({}).required(),
    cards: Joi.array()
      .items(
        Joi.object({
          uuid: Joi.string().default("").required(),
          bg_image: Joi.any().optional(),
          title1: Joi.object().default({}).optional(),
          title2: Joi.object().default({}).optional(),
          button_text: Joi.object().default({}).optional(),
          button_link: Joi.string().optional(),
        })
      )
      .optional(),
  }).optional(),

  section5: Joi.object({
    uuid: Joi.string().default("").required(),
    title: Joi.object().default({}).required(),
  }).optional(),



  section6: Joi.object({
    title: Joi.object().default({}).required(),
    cards: Joi.array()
      .items(
        Joi.object({
          uuid: Joi.string().default("").required(),
          image: Joi.any().optional(),
          title: Joi.object().default({}).optional(),
          description: Joi.object().default({}).optional(),
        })
      )
      .optional(),
  }).optional(),


  section7: Joi.object({
    title: Joi.object().default({}).required(),
    sub_title: Joi.object().default({}).required(),
    cards: Joi.array()
      .items(
        Joi.object({
          uuid: Joi.string().default("").required(),
          image: Joi.any().optional(),
          title: Joi.object().default({}).optional(),
          description: Joi.object().default({}).optional(),
        })
      )
      .optional(),
  }).optional(),


  section8: Joi.object({
    title: Joi.object().default({}).required(),
    card1: Joi.object({
      uuid: Joi.string().default("").required(),
      first_image: Joi.any().optional(),
      second_image: Joi.any().optional(),
      title: Joi.object().default({}).optional(),
      sub_title: Joi.object().default({}).optional(),
      description: Joi.object().default({}).optional(),
      button_text: Joi.object().default({}).optional(),
      button_link: Joi.string().optional(),
    }).optional(),
    card2: Joi.object({
      uuid: Joi.string().default("").required(),
      image: Joi.any().optional(),
      title: Joi.object().default({}).optional(),
      sub_title: Joi.object().default({}).optional(),
      description: Joi.object().default({}).optional(),
      button_text: Joi.object().default({}).optional(),
      button_link: Joi.string().optional(),
    }).optional(),
    card3: Joi.object({
      uuid: Joi.string().default("").required(),
      image: Joi.any().optional(),
      title: Joi.object().default({}).optional(),
      sub_title: Joi.object().default({}).optional(),
      description: Joi.object().default({}).optional(),
      button_text: Joi.object().default({}).optional(),
      button_link: Joi.string().optional(),
    }).optional(),
  }).optional(),


  section9: Joi.object({
    uuid: Joi.string().default("").required(),
    bg_image: Joi.any().optional(),
    left_image: Joi.string().optional(),
    title: Joi.object().default({}).required(),
    description: Joi.object().default({}).required(),
    link_text: Joi.object().default({}).required(),
    link_url: Joi.string().optional(),

  }).optional(),
  



  status: statusJoiValidation, // Validate status with existing function
});

module.exports = {
  CreateHomeValidation,
};
