

const { asyncHandler } = require("../../../../utils/asyncHandler");
const { fetchHomeController } = require("./controller");

module.exports = (app) => {

  app.get(
    "/fetch-home",
    asyncHandler(fetchHomeController)
  );

};
