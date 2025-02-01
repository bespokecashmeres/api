const { default: mongoose } = require("mongoose");
const OurStoryModel = require("../../Admin/OurStory/schema");
const { DEFAULT_LOCALE } = require("../../../../utils/constants");

module.exports.FindStory = async (id, language = DEFAULT_LOCALE) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid ObjectId:", id);
      return null;
    }

    const [data] = await OurStoryModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) },
      },
      {
        $project: {
          title: { $ifNull: [`$title.${language}`, `$title.en`] },
          description: { $ifNull: [`$description.${language}`, `$description.en`] },
          my_stories: {
            $map: {
              input: "$my_stories",
              as: "story",
              in: {
                uuid: "$$story.uuid",
                image: "$$story.image",
                title: { $ifNull: [`$$story.title.${language}`, `$$story.title.en`] },
                description: { $ifNull: [`$$story.description.${language}`, `$$story.description.en`] },
              },
            },
          },
        },
      },
    ]);

    console.log("Inside MongoDB query result:", data);

    return data || null;
  } catch (error) {
    console.error("Error fetching story:", error);
    throw error;
  }
};
