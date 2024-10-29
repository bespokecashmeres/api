const middleware = require("../../../../middleware/middleware");
const { verifyToken } = require("../../../../services/auth");
const {
  loginUser,
  resetPasswordValidator,
  forgotPasswordValidator,
  setNewPasswordValidator,
  googleLoginUser,
} = require("./validation");
const { login, logout, resetPassword, forgotPassword, setNewPassword, googleLogin } = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
  app.post("/login/google-login", middleware(googleLoginUser), asyncHandler(googleLogin));
  app.post("/login", middleware(loginUser), asyncHandler(login));
  app.get("/logout", verifyToken, asyncHandler(logout));
  app.post("/reset-password", verifyToken, middleware(resetPasswordValidator), asyncHandler(resetPassword));
  app.post("/forgot-password", middleware(forgotPasswordValidator), asyncHandler(forgotPassword));
  app.post("/forgot-password/set-new", verifyToken, middleware(setNewPasswordValidator), asyncHandler(setNewPassword));
};
