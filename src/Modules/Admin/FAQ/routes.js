const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");
const {
  createValidator,
  updateValidator,
} = require("./validation.js");
const {
  createController,
  updateController,
  listController,
  getDetailController,
  deleteController,
  statusController,
} = require("./controller.js");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { IdValidator, listValidator, statusValidator } = require("../../../../utils/validation");

module.exports = (app) => {

  //creat api
  app.post(
    "/faq/create",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(createValidator),
    asyncHandler(createController)
  );

  //update api
  app.put(
    "/faq/update",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(updateValidator),
    asyncHandler(updateController)
  );

  //get by id
  app.get(
    "/faq/:_id",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(getDetailController)
  );


  //list api
  app.post(
    "/faq/list",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );


  //delete api
  app.delete(
    "/faq/:_id",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );

  //status
  app.patch(
    "/faq/status",
    // verifyToken,
    // hasRole(["admin"]),
    middleware(statusValidator),
    asyncHandler(statusController)
  );
};
