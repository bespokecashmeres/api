const middleware = require("../../../../middleware/middleware");

const {
  createOurStory,updateOurStory
} = require("./validation");
const {
  createOurStoryController,updateOurStoryController,
  listOurStoryController,
  getOurStoryController,
  deleteController
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { uploadStoryFields } = require("../../../../middleware/uploadProductFieldsMiddleware");

module.exports = (app) => {
  app.post(
    "/story/create",
    (req, res, next) => {
      const count = parseInt(req.headers["count"] || "0", 10);
      const uploadMiddleware = uploadStoryFields(count);
      uploadMiddleware(req, res, next);
    },
    middleware(createOurStory),
    asyncHandler(createOurStoryController)
  );

  app.patch(
    "/story/update",
    middleware(updateOurStory),
    asyncHandler(updateOurStoryController)
  );

  app.get(
    "/story/list",
    asyncHandler(listOurStoryController)
  );

  app.get(
    "/story/:_id",
    asyncHandler(getOurStoryController)
  );

  app.delete(
    "/story/:_id",
    asyncHandler(deleteController)
  );
};
