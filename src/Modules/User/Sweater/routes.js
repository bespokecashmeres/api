const { listController } = require("./controller");
const middleware = require("../../../../middleware/middleware");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { listValidator } = require("../../../../utils/validation");
const { stepDetailsValidator } = require("../../Admin/StepModules/StepType/validation");
const { stepDetailsController } = require("../../Admin/StepModules/StepType/controller");

module.exports = (app) => {
  app.post(
    "/sweater/step-1",
    middleware(listValidator),
    asyncHandler(listController)
  );
  app.post(
    "/sweater/step-details",
    middleware(stepDetailsValidator),
    asyncHandler(stepDetailsController)
  );
}