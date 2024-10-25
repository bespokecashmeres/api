const middleware = require("../../../../middleware/middleware");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { verifyToken } = require("../../../../services/auth");
const {
  getActiveController,
  createController,
  updateController,
  listController,
  getDetailController,
  statusController,
} = require("./controller");
const hasRole = require("../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
  listValidator,
  IdValidator,
  statusValidator,
} = require("./validation");

module.exports = (app) => {
  app.post(
    "/measurement-type/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.put(
    "/measurement-type/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.patch(
    "/measurement-type/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
  app.post(
    "/measurement-type/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.get("/measurement-type/all", asyncHandler(getActiveController));
  app.get(
    "/measurement-type/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
};
