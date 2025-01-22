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

module.exports = (app) => {
  // Create new product template
  app.post(
    "/product-template",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );

  // Update product template
  app.put(
    "/product-template/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );

  // Get single product template
  app.get(
    "/product-template/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );

  // List product templates with filters
  app.post(
    "/product-template/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );

  // Delete product template
  app.delete(
    "/product-template/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );

  // Update product template status
  app.patch(
    "/product-template/:_id/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};