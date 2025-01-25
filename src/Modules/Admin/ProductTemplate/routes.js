const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
  dropdownValidator,
} = require("./validation");
const {
  createController,
  updateController,
  listController,
  getDetailController,
  deleteController,
  statusController,
  dropdownOptionsController,
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
    uploadKeyBase.fields([{ name: "images", maxCount: 4 }]),
    middleware(createValidator),
    asyncHandler(createController)
  );

  // Update product template
  app.put(
    "/product-template/update",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([{ name: "images", maxCount: 4 }]),
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

  app.post(
    "/product-template/options",
    verifyToken,
    hasRole(["admin"]),
    middleware(dropdownValidator),
    asyncHandler(dropdownOptionsController)
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