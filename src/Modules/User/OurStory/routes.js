const {fetchOurStoryController} = require("../../Admin/OurStory/controller")

const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
 

  
    app.get(
      "/fetch-story/:_id",
      asyncHandler(fetchOurStoryController)
    );



};
