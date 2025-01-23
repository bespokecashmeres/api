const middleware = require("../../../../middleware/middleware");

const {
  createHomeValidation,
  updateHomeValidation
} = require("./validation");
const {
  CreateHomeCtrl,
  UpdateHomeCtrl,
  GetHomeCtrl,
  deleteHomeCtrl
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
  app.post(
    "/home/create",
    middleware(createHomeValidation),
    asyncHandler(CreateHomeCtrl)
  );

  app.patch(
    "/home/update",
    middleware(updateHomeValidation),
    asyncHandler(UpdateHomeCtrl)
  );

  app.get(
    "/home/:_id",
    asyncHandler(GetHomeCtrl)
  );

  app.delete(
    "/home/:_id",
    asyncHandler(deleteHomeCtrl)
  );
};
