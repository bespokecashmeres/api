const middleware = require("../../../../middleware/middleware");

const { createUser } = require("./validation");
const { createUserController } = require("./controller");
const { asyncHandler } = require("../../../../utils/asyncHandler");

module.exports = (app) => {
  app.post(
    "/pre-user-registration",
    middleware(createUser),
    asyncHandler(createUserController)
  );
};
