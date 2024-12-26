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
    "/fitting-size-option-allocation/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.put(
    "/fitting-size-option-allocation/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.post(
    "/fitting-size-option-allocation/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.get(
    "/fitting-size-option-allocation/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/fitting-size-option-allocation/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/fitting-size-option-allocation/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
