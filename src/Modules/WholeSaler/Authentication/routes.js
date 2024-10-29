const { verifyToken } = require("../../../../services/auth");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const hasRole = require('../../../../middleware/hasRole');
const { updateWholeSalerProfileStatusController } = require("./controller");

module.exports = (app) => {
  app.post("/whole-saler/email-verification", verifyToken, hasRole(['ws']), asyncHandler(updateWholeSalerProfileStatusController));
};
