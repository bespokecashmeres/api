const middleware = require("../../../../../middleware/middleware");
const { verifyToken } = require("../../../../../services/auth");
const hasRole = require("../../../../../middleware/hasRole");
const { createValidator, typeValidator } = require("./validation");
const {
  listController,
  deleteController,
  getActiveController,
  getDetailController,
  statusController,
  upsertInfoController,
  upsertImageController,
  getDetailsByTypeController,
} = require("./controller");
const { asyncHandler } = require("../../../../../utils/asyncHandler");
const uploadKeyBase = require("../../../../../middleware/uploadKeyBaseMiddleware");
const {
  listValidator,
  IdValidator,
  statusValidator,
} = require("../../../../../utils/validation");

module.exports = (app) => {
  app.post(
    "/yarn-module-info/upsert/info",
    verifyToken,
    hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(upsertInfoController)
  );
  app.post(
    "/yarn-module-info/upsert/image",
    verifyToken,
    hasRole(["admin"]),
    uploadKeyBase.fields([{ name: "image", maxCount: 1 }]),
    middleware(createValidator),
    asyncHandler(upsertImageController)
  );
  app.post(
    "/yarn-module-info/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.get("/yarn-module-info/active", asyncHandler(getActiveController));
  app.get(
    "/yarn-module-info/type/:type",
    verifyToken,
    hasRole(["admin"]),
    middleware(typeValidator),
    asyncHandler(getDetailsByTypeController)
  );
  app.get(
    "/yarn-module-info/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );
  app.delete(
    "/yarn-module-info/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
  app.patch(
    "/yarn-module-info/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
