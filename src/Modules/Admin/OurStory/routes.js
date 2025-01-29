const middleware = require("../../../../middleware/middleware");

const {
  createOurStory,updateOurStory
} = require("./validation");
const {
  createOurStoryController,updateOurStoryController,
  listOurStoryController,
  getOurStoryController,
  deleteController,
  statusController,
  fetchOurStoryController
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { uploadStoryFields } = require("../../../../middleware/uploadProductFieldsMiddleware");
const { listValidator } = require("../../../../utils/validation");

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

  app.put(
    "/story/update",
    (req, res, next) => {
      const count = parseInt(req.headers["count"] || "0", 10);
      const uploadMiddleware = uploadStoryFields(count);
      uploadMiddleware(req, res, next);
    },
    middleware(updateOurStory),
    asyncHandler(updateOurStoryController)
  );

  app.post(
    "/story/list",
    middleware(listValidator),
    asyncHandler(listOurStoryController)
  );

  app.get(
    "/story/:_id",
    asyncHandler(getOurStoryController)
  );

  app.get(
    "/story/fetch/:_id",
     asyncHandler(fetchOurStoryController)
  );

  app.patch(
    "/story/status",
    asyncHandler(statusController)
  );


  app.delete(
    "/story/:_id",
    asyncHandler(deleteController)
  );
};
