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
  app.post("/lookBook/add", verifyToken, hasRole(['admin']), uploadKeyBase.fields([
    { name: 'image', maxCount: 1 },
    { name: 'pdf', maxCount: 1 },
  ]), middleware(createValidator), asyncHandler(createController));
  app.put("/lookBook/update", verifyToken, hasRole(['admin']), uploadKeyBase.fields([
    { name: 'image', maxCount: 1 },
    { name: 'pdf', maxCount: 1 },
  ]), middleware(updateValidator), asyncHandler(updateController));
  app.get("/lookBook/active", asyncHandler(getCampainDetailController));
  app.post("/lookBook/list", verifyToken, hasRole(['admin']), middleware(listValidator), asyncHandler(listController));
  app.post("/lookBook/row/reorder", verifyToken, hasRole(['admin']), middleware(reorderValidator), asyncHandler(rowsReorderController));
  app.delete("/lookBook/:_id", verifyToken, hasRole(['admin']), middleware(IdValidator), asyncHandler(deleteController));
  app.get("/lookBook/:_id", verifyToken, hasRole(['admin']), middleware(IdValidator), asyncHandler(getDetailController));
  app.patch(
    "/lookBook/status",
    verifyToken,
    hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};