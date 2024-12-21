const middleware = require("../../../../middleware/middleware");

const { createUser } = require("./validation");
const {
  createUserController,
  listController,
  deleteController,
} = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");
const { listValidator, IdValidator } = require("../../../../utils/validation");
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
  app.delete(
    "/pre-user-registration/:_id",
    verifyToken,
    hasRole(["admin"]),
    middleware(IdValidator),
    asyncHandler(deleteController)
  );
};
