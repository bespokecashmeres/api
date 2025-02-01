const {fetchOurStoryController} = require("./controller")

const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
 

  
    app.get(
      "/fetch-story/:_id",
      asyncHandler(fetchOurStoryController)
    );



};
