

const {
  GetHomeCtrl
} = require("../../Admin/Home/controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {

  app.get(
    "/fetch-home",
    asyncHandler(GetHomeCtrl)
  );

};
