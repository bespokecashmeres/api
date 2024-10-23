const middleware = require("../../../../middleware/middleware");

const { createUser, updateUser, getUsers, createUserAndMeasurement, updateUserStatus, updateUserAndMesurement, getUserAndMeasurement, updateWholeSaler, createWholeSaler } = require("./validation");
const { createUserController, updateUserController, getUserController, getAllUsersController, getActiveUsersController, createUserAndMeasurementController, updateUserStatusController, updateUserAndMeasurementController, getUserAndMeasurementController, getAllWholeSalerController, getActiveWholeSalerController, getWholeSalerController, updateWholeSalerController } = require("./controller");
const { verifyToken } = require("../../../../services/auth");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const hasRole = require('../../../../middleware/hasRole');

module.exports = (app) => {
  app.post("/register", middleware(createUser), asyncHandler(createUserController));
  app.patch("/update-user", verifyToken, middleware(updateUser), asyncHandler(updateUserController));
  app.get("/profile", verifyToken, asyncHandler(getUserController));

  app.post("/admin/users", verifyToken, hasRole(['admin']), middleware(getUsers), asyncHandler(getAllUsersController));
  app.get("/active/users", verifyToken, hasRole(['admin']), asyncHandler(getActiveUsersController));
  app.get("/admin/user/:_id", verifyToken, hasRole(['admin']), middleware(getUserAndMeasurement), asyncHandler(getUserAndMeasurementController));
  app.put("/admin/user/update", verifyToken, hasRole(['admin']), middleware(updateUserAndMesurement), asyncHandler(updateUserAndMeasurementController));
  app.patch("/admin/user/status", verifyToken, hasRole(['admin']), middleware(updateUserStatus), asyncHandler(updateUserStatusController));
  app.post("/admin/user/add", verifyToken, hasRole(['admin']), middleware(createUserAndMeasurement), asyncHandler(createUserAndMeasurementController));


  app.post("/admin/whole-saler", verifyToken, hasRole(['admin']), middleware(getUsers), asyncHandler(getAllWholeSalerController));
  app.get("/active/whole-saler", verifyToken, hasRole(['admin']), asyncHandler(getActiveWholeSalerController));
  app.get("/admin/whole-saler/:_id", verifyToken, hasRole(['admin']), middleware(getUserAndMeasurement), asyncHandler(getWholeSalerController));
  app.put("/admin/whole-saler/update", verifyToken, hasRole(['admin']), middleware(updateWholeSaler), asyncHandler(updateWholeSalerController));
  app.patch("/admin/whole-saler/status", verifyToken, hasRole(['admin']), middleware(updateUserStatus), asyncHandler(updateUserStatusController));
  app.post("/admin/whole-saler/add", verifyToken, hasRole(['admin']), middleware(createWholeSaler), asyncHandler(createUserAndMeasurementController));
};
