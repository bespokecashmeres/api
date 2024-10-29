const { serverResponseMessage } = require("../../../../config/message");
const { getTokenTimeDifference } = require("../../../../utils/common");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
  getUserById,
  UpdateData,
} = require("../../Admin/Authentication/dbQuery");

exports.updateWholeSalerProfileStatusController = async (req, res, next) => {
  const { userId } = req;
  
  const isUserPresent = await getUserById(userId);
  if (!isUserPresent) {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }

  if (isUserPresent.is_profile_verified) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.EMAIL_ALREADY_VERIFIED),
    };
  }

  await UpdateData(isUserPresent, {
    is_profile_verified: true,
    token: null,
  });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.EMAIL_VERIFICATION_SUCCESS)
    )
  );
};
