const middleware = require("../../../../../middleware/middleware");
const { verifyToken } = require("../../../../../services/auth");
const hasRole = require("../../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
  tabsValidator,
  activeTabsValidator,
  stepDetailsValidator,
  stepFullViewValidator,
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
  dropdownOptionsController,
  stepDetailsController,
  stepFullViewController,
} = require("./controller");
const { asyncHandler } = require("../../../../../utils/asyncHandler");
const {
  reorderValidator,
  IdValidator,
  statusValidator,
} = require("../../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/step-type/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.post(
    "/step-type/row/reorder",
    verifyToken,
    hasRole(["admin"]),
    middleware(reorderValidator),
    asyncHandler(rowsReorderController)
  );
  app.put(
    "/step-type/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.post(
    "/step-type/tabs/:productTypeId?",
    verifyToken,
    hasRole(["admin"]),
    middleware(tabsValidator),
    asyncHandler(tabsController)
  );
  app.get(
    "/step-type/activeTabs/:productTypeId",
    verifyToken,
    middleware(activeTabsValidator),
    asyncHandler(getActiveController)
  );
  app.post(
    "/step-type/options/:productTypeId",
    verifyToken,
    middleware(activeTabsValidator),
    asyncHandler(dropdownOptionsController)
  );
  app.post(
    "/step-type/details",
    verifyToken,
    middleware(stepDetailsValidator),
    asyncHandler(stepDetailsController)
  );
  app.post("/step-type/full-view", verifyToken, middleware(stepFullViewValidator), asyncHandler(stepFullViewController))
  app.get(
    "/step-type/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/step-type/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/step-type/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
