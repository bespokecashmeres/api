const { asyncHandler } = require("../../../../utils/asyncHandler");
const { getActiveController } = require("./controller");

module.exports = (app) => {
    app.get("/gender/list", asyncHandler(getActiveController));
};