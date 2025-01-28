const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");

const {
  createController,
  updateController,
  listController,
  getDetailController,
  deleteController,
  statusController,
} = require("./controller.js");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { IdValidator } = require("../../../../utils/validation");
const { createValidator } = require("./validation.js");
const { updateValidator } = require("./validation.js");
const { uploadBannerFields } = require("../../../../middleware/uploadProductFieldsMiddleware.js");

module.exports = (app) => {

  //creat api
  app.post(
    "/banner/create",
    // verifyToken,
    // hasRole(["admin"]),
    (req, res, next) => {
      const count = parseInt(req.headers["count"] || "0", 10);
      const uploadMiddleware = uploadBannerFields(count);
      uploadMiddleware(req, res, next);
    },
    middleware(createValidator),
    asyncHandler(createController)
  );

  //update api
  app.put(
    "/banner/update",
    (req, res, next) => {
      const uploadMiddleware = uploadBannerFields();
      uploadMiddleware(req, res, next);
    },
    // verifyToken,
    // hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );

  //get by id
  app.get(
    "/banner/:_id",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );




  //delete api
  app.delete(
    "/banner/:_id",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );

};
