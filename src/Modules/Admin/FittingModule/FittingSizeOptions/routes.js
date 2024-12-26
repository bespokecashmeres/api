const middleware = require("../../../../../middleware/middleware");
const { verifyToken } = require("../../../../../services/auth");
const hasRole = require("../../../../../middleware/hasRole");
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
  tabsController,
  listController,
  dropdownOptionsController,
} = require("./controller");
const { asyncHandler } = require("../../../../../utils/asyncHandler");
const {
  reorderValidator,
  IdValidator,
  statusValidator,
  listValidator,
} = require("../../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/fitting-size-options/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.post(
    "/fitting-size-options/row/reorder",
    verifyToken,
    hasRole(["admin"]),
    middleware(reorderValidator),
    asyncHandler(rowsReorderController)
  );
  app.put(
    "/fitting-size-options/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.post(
    "/fitting-size-options/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post(
    "/fitting-size-options/options",
    middleware(activeValidator),
    asyncHandler(dropdownOptionsController)
  );
  app.post(
    "/fitting-size-options/active",
    middleware(activeValidator),
    asyncHandler(getActiveController)
  );
  app.get(
    "/fitting-size-options/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/fitting-size-options/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/fitting-size-options/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
