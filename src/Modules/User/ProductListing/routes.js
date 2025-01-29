const { listController } = require("./controller");
const { productListValidator } = require("./validation");
const middleware = require("../../../../middleware/middleware");
const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
    app.post(
        "/product-listing/list",
        middleware(productListValidator),
        asyncHandler(listController)
    );
}