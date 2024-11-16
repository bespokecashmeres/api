const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require('../../../../middleware/hasRole');
const {
  createValidator,
  updateValidator,
  listValidator,
  IdValidator,
  reorderValidator,
  statusValidator,
} = require("./validation");
const {
  createController,
  updateController,
  listController,
  deleteController,
  getCampainDetailController,
  getDetailController,
  rowsReorderController,
  statusController,
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const uploadKeyBase = require("../../../../middleware/uploadKeyBaseMiddleware");

module.exports = (app) => {
  app.post("/lookbook/add", verifyToken, hasRole(['admin']), uploadKeyBase.fields([
    { name: 'image', maxCount: 1 },
    { name: 'pdf', maxCount: 1 },
  ]), middleware(createValidator), asyncHandler(createController));
  app.put("/lookbook/update", verifyToken, hasRole(['admin']), uploadKeyBase.fields([
    { name: 'image', maxCount: 1 },
    { name: 'pdf', maxCount: 1 },
  ]), middleware(updateValidator), asyncHandler(updateController));
  app.get("/lookbook/active", asyncHandler(getCampainDetailController));
  app.post("/lookbook/list", verifyToken, hasRole(['admin']), middleware(listValidator), asyncHandler(listController));
  app.post("/lookbook/row/reorder", verifyToken, hasRole(['admin']), middleware(reorderValidator), asyncHandler(rowsReorderController));
  app.delete("/lookbook/:_id", verifyToken, hasRole(['admin']), middleware(IdValidator), asyncHandler(deleteController));
  app.get("/lookbook/:_id", verifyToken, hasRole(['admin']), middleware(IdValidator), asyncHandler(getDetailController));
  app.patch(
    "/lookbook/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};