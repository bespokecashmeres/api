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
const hasRole = require("../../../../middleware/hasRole");
const { verifyToken } = require("../../../../services/auth");

module.exports = (app) => {
  app.post(
    "/story/create",
    verifyToken,
    hasRole(["admin"]),
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
    verifyToken,
    hasRole(["admin"]),
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
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listOurStoryController)
  );

  app.get(
    "/story/:_id",
    verifyToken,
    hasRole(["admin"]),
    asyncHandler(getOurStoryController)
  );

  app.patch(
    "/story/status",
    verifyToken,
    hasRole(["admin"]),
    asyncHandler(statusController)
  );


  // app.delete(
  //   "/story/:_id",
  //   asyncHandler(deleteController)
  // );
};
