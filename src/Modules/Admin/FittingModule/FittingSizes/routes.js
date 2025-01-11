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
const { createNameSlugValidator, updateNameSlugValidator } = require("./validation");

module.exports = (app) => {
  app.post(
    "/fitting-sizes/add",
    verifyToken,
    hasRole(["admin"]),
    middleware(createNameSlugValidator),
    asyncHandler(createController)
  );
  app.put(
    "/fitting-sizes/update",
    verifyToken,
    hasRole(["admin"]),
    middleware(updateNameSlugValidator),
    asyncHandler(updateController)
  );
  app.get(
    "/fitting-sizes/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.post(
    "/fitting-sizes/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post(
    "/fitting-sizes/options",
    asyncHandler(dropdownOptionsController)
  );
  app.delete(
    "/fitting-sizes/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/fitting-sizes/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
