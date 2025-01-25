const middleware = require("../../../../middleware/middleware");


const { CreateHomeValidation } = require('./validation')

const {
  CreateHomeCtrl
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const {  uploadHomePageFields } = require("../../../../middleware/uploadProductFieldsMiddleware");

module.exports = (app) => {
  app.post(
    "/home/create",
    (req, res, next) => {
      const uploadMiddleware = uploadHomePageFields();
      uploadMiddleware(req, res, next);
    },
    middleware(CreateHomeValidation),
    asyncHandler(CreateHomeCtrl)
  );

  // app.patch(
  //   "/home/update",
  //   middleware(updateHomeValidation),
  //   asyncHandler(UpdateHomeCtrl)
  // );

  // app.get(
  //   "/home/:_id",
  //   asyncHandler(GetHomeCtrl)
  // );

  // app.delete(
  //   "/home/:_id",
  //   asyncHandler(deleteHomeCtrl)
  // );
};
