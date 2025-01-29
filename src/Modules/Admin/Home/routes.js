const middleware = require("../../../../middleware/middleware");


const { CreateHomeValidation, UpdateHomeValidation } = require('./validation')

const {
  CreateHomeCtrl,
  updateHomeController,
  GetHomeCtrl
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const {  uploadHomePageFields } = require("../../../../middleware/uploadProductFieldsMiddleware");

module.exports = (app) => {
  app.post(
    "/home/create",
    (req, res, next) => {
      const allCount = [];
      const count_section3 = parseInt(req.headers["count_section3"])
      const count_section4 = parseInt(req.headers["count_section4"])
      const count_section6 = parseInt(req.headers["count_section6"])
      const count_section7 = parseInt(req.headers["count_section7"])
      allCount.push(count_section3);
      allCount.push(count_section4);
      allCount.push(count_section6);
      allCount.push(count_section7);
      const uploadMiddleware = uploadHomePageFields(allCount);
      console.log("step 2",uploadMiddleware);
      uploadMiddleware(req, res, next);
    },
    middleware(CreateHomeValidation),
    asyncHandler(CreateHomeCtrl)
  );

  app.patch(
    "/home/update",
    (req, res, next) => {
      const allCount = [];
      const count_section3 = parseInt(req.headers["count_section3"])
      const count_section4 = parseInt(req.headers["count_section4"])
      const count_section6 = parseInt(req.headers["count_section6"])
      const count_section7 = parseInt(req.headers["count_section7"])
      allCount.push(count_section3);
      allCount.push(count_section4);
      allCount.push(count_section6);
      allCount.push(count_section7);
      const uploadMiddleware = uploadHomePageFields(allCount);
      console.log("step 2",uploadMiddleware);
      uploadMiddleware(req, res, next);
    },
    middleware(UpdateHomeValidation),
    asyncHandler(updateHomeController)
  );

  app.get(
    "/home",
    asyncHandler(GetHomeCtrl)
  );

  // app.delete(
  //   "/home/:_id",
  //   asyncHandler(deleteHomeCtrl)
  // );
};
