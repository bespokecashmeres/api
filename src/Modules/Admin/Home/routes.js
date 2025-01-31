const middleware = require("../../../../middleware/middleware");


const { CreateHomeValidation, UpdateHomeValidation } = require('./validation')

const {
  CreateHomeCtrl,
  updateHomeController,
  GetHomeCtrl,
  GetHomeOurStory
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const {  uploadHomePageFields } = require("../../../../middleware/uploadProductFieldsMiddleware");
const hasRole = require("../../../../middleware/hasRole");
const { verifyToken } = require("../../../../services/auth");

module.exports = (app) => {
  app.post(
    "/home/create",
    verifyToken,
    hasRole(["admin"]),
    (req, res, next) => {
      const allCount = [];
      const count_section3 = parseInt(req.headers["count_section3"])
      const count_section4 = parseInt(req.headers["count_section4"])
      const count_section6 = parseInt(req.headers["count_section6"])
      allCount.push(count_section3);
      allCount.push(count_section4);
      allCount.push(count_section6);
      const uploadMiddleware = uploadHomePageFields(allCount);
      uploadMiddleware(req, res, next);
    },
    middleware(CreateHomeValidation),
    asyncHandler(CreateHomeCtrl)
  );

  app.patch(
    "/home/update",
    verifyToken,
    hasRole(["admin"]),
    (req, res, next) => {
      const allCount = [];
      const count_section3 = parseInt(req.headers["count_section3"])
      const count_section4 = parseInt(req.headers["count_section4"])
      const count_section6 = parseInt(req.headers["count_section6"])
      allCount.push(count_section3);
      allCount.push(count_section4);
      allCount.push(count_section6);
      const uploadMiddleware = uploadHomePageFields(allCount);
      uploadMiddleware(req, res, next);
    },
    middleware(UpdateHomeValidation),
    asyncHandler(updateHomeController)
  );

  app.get(
    "/home",
    verifyToken,
    hasRole(["admin"]),
    asyncHandler(GetHomeCtrl)
  );

  app.get(
    "/home/our-story",
    verifyToken,
    hasRole(["admin"]),
    asyncHandler(GetHomeOurStory)
  );

  // app.delete(
  //   "/home/:_id",
  //   asyncHandler(deleteHomeCtrl)
  // );
};
