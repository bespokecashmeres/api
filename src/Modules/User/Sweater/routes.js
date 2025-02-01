const { listController } = require("./controller");
const middleware = require("../../../../middleware/middleware");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { listValidator } = require("../../../../utils/validation");

module.exports = (app) => {
    app.post(
        "/sweater/step-1",
        middleware(listValidator),
        asyncHandler(listController)
      );
}