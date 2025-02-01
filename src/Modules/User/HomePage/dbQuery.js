const { default: mongoose } = require("mongoose");
const HomeModel = require("../../Admin/Home/schema");
const { DEFAULT_LOCALE } = require("../../../../utils/constants");

module.exports.FetchHome = async ( language = DEFAULT_LOCALE) => {

    const [data] = await HomeModel.aggregate([
      { $match: { status:true }},
      {
        $project: {
          "section1.title": { $ifNull: [`$section1.title.${language}`, `$section1.title.en`] },
          "section1.bg_image": 1,
          "section2.bg_image": 1,
          "section2.left_image": 1,
          "section2.title": { $ifNull: [`$section2.title.${language}`, `$section2.title.en`] },
          "section2.description": { $ifNull: [`$section2.description.${language}`, `$section2.description.en`] },
          "section3": {
            $map: {
              input: "$section3",
              as: "sec",
              in: {
                uuid: "$$sec.uuid",
                title: { $ifNull: [`$$sec.title.${language}`, `$$sec.title.en`] },
                image: "$$sec.image",
                image_link: "$$sec.image_link",
              },
            },
          },
          "section4.title": { $ifNull: [`$section4.title.${language}`, `$section4.title.en`] },
          "section4.description": { $ifNull: [`$section4.description.${language}`, `$section4.description.en`] },
          "section4.cards": {
            $map: {
              input: "$section4.cards",
              as: "card",
              in: {
                uuid: "$$card.uuid",
                bg_image: "$$card.bg_image",
                title1: { $ifNull: [`$$card.title1.${language}`, `$$card.title1.en`] },
                title2: { $ifNull: [`$$card.title2.${language}`, `$$card.title2.en`] },
                button_text: { $ifNull: [`$$card.button_text.${language}`, `$$card.button_text.en`] },
                button_link: "$$card.button_link",
              },
            },
          },
          "section5.title": { $ifNull: [`$section5.title.${language}`, `$section5.title.en`] },
          "section6.title": { $ifNull: [`$section6.title.${language}`, `$section6.title.en`] },
          "section6.cards": {
            $map: {
              input: "$section6.cards",
              as: "card",
              in: {
                uuid: "$$card.uuid",
                image: "$$card.image",
                button_text: { $ifNull: [`$$card.button_text.${language}`, `$$card.button_text.en`] },
                button_link: "$$card.button_link",
              },
            },
          },
          "section7.title": { $ifNull: [`$section7.title.${language}`, `$section7.title.en`] },
          "section7.sub_title": { $ifNull: [`$section7.sub_title.${language}`, `$section7.sub_title.en`] },
          "section8.title": { $ifNull: [`$section8.title.${language}`, `$section8.title.en`] },
          "section8.card1": {
            uuid: "$section8.card1.uuid",
            first_image: "$section8.card1.first_image",
            second_image: "$section8.card1.second_image",
            title: { $ifNull: [`$section8.card1.title.${language}`, `$section8.card1.title.en`] },
            sub_title: { $ifNull: [`$section8.card1.sub_title.${language}`, `$section8.card1.sub_title.en`] },
            description: { $ifNull: [`$section8.card1.description.${language}`, `$section8.card1.description.en`] },
            button_text: { $ifNull: [`$section8.card1.button_text.${language}`, `$section8.card1.button_text.en`] },
            button_link: "$section8.card1.button_link",
          },
          "section9.bg_image": 1,
          "section9.left_image": 1,
          "section9.title": { $ifNull: [`$section9.title.${language}`, `$section9.title.en`] },
          "section9.description": { $ifNull: [`$section9.description.${language}`, `$section9.description.en`] },
          "section9.link_text": { $ifNull: [`$section9.link_text.${language}`, `$section9.link_text.en`] },
          "section9.link_url": 1,
        },
      },
    ]);

    return data || null;
};
