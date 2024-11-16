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
  deleteController,
  getActiveController,
  getDetailController,
  rowsReorderController,
  statusController,
  dropdownOptionsController,
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const uploadKeyBase = require("../../../../middleware/uploadKeyBaseMiddleware");
const { reorderValidator, listValidator, IdValidator, statusValidator } = require("../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/child-category/add",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([{ name: "image", maxCount: 1 }]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.post(
    "/child-category/row/reorder",
    verifyToken,
    hasRole(["admin"]),
    middleware(reorderValidator),
    asyncHandler(rowsReorderController)
  );
  app.post(
    "/child-category/options",
    verifyToken,
    hasRole(["admin"]),
    middleware(dropdownValidator),
    asyncHandler(dropdownOptionsController)
  );
  app.put(
    "/child-category/update",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([{ name: "image", maxCount: 1 }]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.post(
    "/child-category/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.get("/child-category/active", asyncHandler(getActiveController));
  app.get(
    "/child-category/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/child-category/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/child-category/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
