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
    "/yarn-module/fitting/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createNameValidator),
    asyncHandler(createController)
  );
  app.put(
    "/yarn-module/fitting/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateNameValidator),
    asyncHandler(updateController)
  );
  app.get(
    "/yarn-module/fitting/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.post(
    "/yarn-module/fitting/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post("/yarn-module/fitting/options", asyncHandler(dropdownOptionsController));
  app.delete(
    "/yarn-module/fitting/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/yarn-module/fitting/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
