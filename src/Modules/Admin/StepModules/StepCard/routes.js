const middleware = require("../../../../../middleware/middleware");
const { verifyToken } = require("../../../../../services/auth");
const hasRole = require("../../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
  listValidator,
  IdValidator,
  reorderValidator,
  statusValidator,
  optionValidator,
  optionSlugValidator,
} = require("./validation");
const {
  createController,
  updateController,
  listController,
  deleteController,
  getDetailController,
  rowsReorderController,
  statusController,
  getActiveController,
  dropdownOptionsController,
  dropdownOptionsBySlugController,
} = require("./controller");
const { asyncHandler } = require("../../../../../utils/asyncHandler");
const uploadKeyBase = require("../../../../../middleware/uploadKeyBaseMiddleware");

module.exports = (app) => {
  app.post(
    "/step-card/add",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([
      { name: "graphImage", maxCount: 1 },
      { name: "realImage", maxCount: 1 },
    ]),
    middleware(createValidator),
    asyncHandler(createController)
  );
  app.put(
    "/step-card/update",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([
      { name: "graphImage", maxCount: 1 },
      { name: "realImage", maxCount: 1 },
    ]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );
  app.get("/step-card/active", asyncHandler(getActiveController));
  app.post(
    "/step-card/list/:stepTypeId",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post(
    "/step-card/options/:stepTypeId",
    middleware(optionValidator),
    asyncHandler(dropdownOptionsController)
  );
  app.post(
    "/step-card/options/slug/:slug",
    middleware(optionSlugValidator),
    asyncHandler(dropdownOptionsBySlugController)
  );
  app.post(
    "/step-card/row/reorder",
    verifyToken,
    hasRole(["admin"]),
    middleware(reorderValidator),
    asyncHandler(rowsReorderController)
  );
  app.delete(
    "/step-card/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.get(
    "/step-card/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.patch(
    "/step-card/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
