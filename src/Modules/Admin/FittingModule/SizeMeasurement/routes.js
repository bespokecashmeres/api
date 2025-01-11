const middleware = require("../../../../../middleware/middleware");
const { verifyToken } = require("../../../../../services/auth");
const hasRole = require("../../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
} = require("./validation");
const {
  createController,
  updateController,
  deleteController,
  getDetailController,
  statusController,
  listController,
} = require("./controller");
const { asyncHandler } = require("../../../../../utils/asyncHandler");
const {
  IdValidator,
  statusValidator,
  listValidator,
} = require("../../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/size-measurement/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.put(
    "/size-measurement/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.post(
    "/size-measurement/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.get(
    "/size-measurement/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/size-measurement/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/size-measurement/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
