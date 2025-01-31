const { getAvailableSizesController } = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
    app.get(
        "/get-available-sizes",
        asyncHandler(getAvailableSizesController)
    );
}