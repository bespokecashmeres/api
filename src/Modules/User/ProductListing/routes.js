const { listController, productDetailsController, productPriceBySizeController } = require("./controller");
const { productListValidator, productPriceBySlugValidator } = require("./validation");
const middleware = require("../../../../middleware/middleware");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { IdValidator } = require("../../../../utils/validation");

module.exports = (app) => {
    app.post(
        "/product-listing/list",
        middleware(productListValidator),
        asyncHandler(listController)
    );
    app.get(
        "/product-details/:_id",
        middleware(IdValidator),
        asyncHandler(productDetailsController)
    );
    app.post(
        "/product-price-by-size",
        middleware(productPriceBySlugValidator),
        asyncHandler(productPriceBySizeController)
    );
}