const middleware = require("../../../../middleware/middleware");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");
const { getActiveController, createController, updateController, getDetailController, listController, dropdownOptionsController, deleteController, statusController } = require("./controller");
const { IdValidator, listValidator, statusValidator } = require("../../../../utils/validation");
const { createGenderValidator, updateGenderValidator } = require("./validation");

module.exports = (app) => {
  app.post(
    "/gender/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createGenderValidator),
    asyncHandler(createController)
  );
  app.put(
    "/gender/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateGenderValidator),
    asyncHandler(updateController)
  );
  app.get("/gender/active", asyncHandler(getActiveController));
  app.get(
    "/gender/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.post(
    "/gender/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post("/gender/options", asyncHandler(dropdownOptionsController));
  app.delete(
    "/gender/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/gender/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
