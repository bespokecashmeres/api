const middleware = require("../../../../middleware/middleware");

const { createUser } = require("./validation");
const { createUserController, listController } = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { listValidator } = require("../../../../utils/validation");
const { verifyToken } = require("../../../../services/auth");
const hasRole = require("../../../../middleware/hasRole");

module.exports = (app) => {
  app.post(
    "/pre-user-registration",
    middleware(createUser),
    asyncHandler(createUserController)
  );
  app.post(
    "/pre-user-registration/list",
    verifyToken,
    hasRole(["admin"]),
    middleware(listValidator),
    asyncHandler(listController)
  );
};
