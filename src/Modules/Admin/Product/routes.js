const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");
const { createValidator, updateValidator, relatedProductsValidator } = require("./validation");
const {
  createController,
  updateController,
  listController,
  getDetailController,
  deleteController,
  rowsReorderController,
  releatedOptionsController,
  statusController,
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const uploadMultiple = require("../../../../middleware/uploadMultipleMiddleware");
const {
  IdValidator,
  listValidator,
  reorderValidator,
  statusValidator,
} = require("../../../../utils/validation");
const uploadProductFields = require("../../../../middleware/uploadProductFieldsMiddleware");

module.exports = (app) => {
  app.post(
    "/product/add",
    verifyToken,
    hasRole(["admin"]),
    (req, res, next) => {
      const colorsCount = parseInt(req.headers["colors-count"] || "0", 10);
      const uploadMiddleware = uploadProductFields(colorsCount);
      uploadMiddleware(req, res, next);
    },
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.put(
    "/product/update",
    verifyToken,
    hasRole(["admin"]),
    (req, res, next) => {
      const colorsCount = parseInt(req.headers["colors-count"] || "0", 10);
      const uploadMiddleware = uploadProductFields(colorsCount);
      uploadMiddleware(req, res, next);
    },
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.get(
    "/product/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.post(
    "/product/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post(
    "/product/row/reorder",
    verifyToken,
    hasRole(["admin"]),
    middleware(reorderValidator),
    asyncHandler(rowsReorderController)
  );
  app.post(
    "/product/related-options",
    middleware(relatedProductsValidator),
    asyncHandler(releatedOptionsController)
  );
  app.delete(
    "/product/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/product/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
