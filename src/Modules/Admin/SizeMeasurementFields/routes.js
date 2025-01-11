const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
  activeValidator,
} = require("./validation");
const {
  createController,
  updateController,
  deleteController,
  getActiveController,
  getDetailController,
  rowsReorderController,
  statusController,
  listController,
  dropdownOptionsController,
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const {
  reorderValidator,
  IdValidator,
  statusValidator,
  listValidator,
} = require("../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/size-measurement-fields/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.post(
    "/size-measurement-fields/row/reorder",
    verifyToken,
    hasRole(["admin"]),
    middleware(reorderValidator),
    asyncHandler(rowsReorderController)
  );
  app.put(
    "/size-measurement-fields/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.post(
    "/size-measurement-fields/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post(
    "/size-measurement-fields/options",
    middleware(activeValidator),
    asyncHandler(dropdownOptionsController)
  );
  app.post(
    "/size-measurement-fields/active",
    middleware(activeValidator),
    asyncHandler(getActiveController)
  );
  app.get(
    "/size-measurement-fields/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/size-measurement-fields/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/size-measurement-fields/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
