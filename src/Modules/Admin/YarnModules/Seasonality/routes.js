const middleware = require("../../../../../middleware/middleware");
const { verifyToken } = require("../../../../../services/auth");
const hasRole = require("../../../../../middleware/hasRole");
const {
  createController,
  updateController,
  listController,
  getDetailController,
  deleteController,
  statusController,
  dropdownOptionsController,
} = require("./controller");
const { asyncHandler } = require("../../../../../utils/asyncHandler");
const {
  IdValidator,
  listValidator,
  statusValidator,
  createNameValidator,
  updateNameValidator,
} = require("../../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/yarn-module/seasonality/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createNameValidator),
    asyncHandler(createController)
  );
  app.put(
    "/yarn-module/seasonality/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateNameValidator),
    asyncHandler(updateController)
  );
  app.get(
    "/yarn-module/seasonality/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.post(
    "/yarn-module/seasonality/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post("/yarn-module/seasonality/options", asyncHandler(dropdownOptionsController));
  app.delete(
    "/yarn-module/seasonality/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/yarn-module/seasonality/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
