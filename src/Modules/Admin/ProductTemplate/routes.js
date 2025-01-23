const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
} = require("./validation");
const {
  createController,
  updateController,
  listController,
  getDetailController,
  deleteController,
  statusController,
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { IdValidator, listValidator, statusValidator } = require("../../../../utils/validation");
const uploadKeyBase = require("../../../../middleware/uploadKeyBaseMiddleware");

module.exports = (app) => {
  // Create new product template
  app.post(
    "/product-template/add",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([{ name: "image", maxCount: 1 }]),
    middleware(createValidator),
    asyncHandler(createController)
  );

  // Update product template
  app.put(
    "/product-template/update",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([{ name: "image", maxCount: 1 }]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );

  app.get(
    "/product-template/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );

  app.post(
    "/product-template/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );

  app.delete(
    "/product-template/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );

  app.patch(
    "/product-template/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};