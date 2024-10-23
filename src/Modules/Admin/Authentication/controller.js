const { success, failure, error } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const {
  generateToken,
  generateTemporaryToken,
} = require("../../../../services/auth");
const { httpResponses } = require("../../../../utils/http-responses");
const { getUserData, UpdateData, getUserById, userFind } = require("./dbQuery");
const bcrypt = require("bcrypt");
const {
  sendForgotPasswordEmail,
  sendEmailVerificationEmail,
} = require("../../../../services/tokenSender");
const { config } = require("../../../../config/config");
const { getTokenTimeDifference } = require("../../../../utils/common");
// const { findOneRecord: getSetting } = require("../../Admin/Settings/dbQuery");
const { ObjectId } = require("mongoose").Types;
const User = require("../Users/schema");

const handleEmailNotVerified = async ({ isUserPresent, email, res }) => {
  let token = await generateTemporaryToken({
    email,
    userId: isUserPresent._id,
    emailVerificationToken: true,
    userType: isUserPresent.user_type,
    time: new Date(),
  });
  await UpdateData(isUserPresent, {
    token: token,
  });
  const url = `${config.ADMIN_DOMAIN_URL}/ws/auth/email-verify/${token}`;
  await sendEmailVerificationEmail(isUserPresent.email, url);
  return res.json(
    failure(
      httpStatusCodes.UNAUTHORIZED,
      httpResponses.UNAUTHORIZED,
      res.__(serverResponseMessage.EMAIL_VERIFICATION_MAIL),
      {
        token,
        url: url,
      }
    )
  );
};

exports.googleLogin = async (req, res) => {
  const { email, token, userType } = req.body;
  console.log("data: ", email, token, userType);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const googleEmail = payload.email;
  const user = await userFind({ email: googleEmail });

  if (user) {
    let token = await generateToken(user);
    const updateUser = await UpdateData(user, {
      token: token,
    });
    delete updateUser.password;
    return res.json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.LOGIN_SUCCESSFULLY),
        updateUser
      )
    );
  } else {
    user = new User({ email: googleEmail, user_type: userType });
    await user.save();
    let token = await generateToken(user);
    const updateUser = await UpdateData(user, {
      token: token,
    });
    delete updateUser.password;
    return res.json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.LOGIN_SUCCESSFULLY),
        updateUser
      )
    );
  }
};

exports.login = async (req, res) => {
  const { email, password, userType } = req.body;
  const isUserPresent = await getUserData({
    email: email,
  });
  if (!isUserPresent) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_USER_CRED),
    };
  }
  const isAdminUser =
    isUserPresent.user_type === "admin" && userType !== "admin";
  const isWsUser = isUserPresent.user_type === "ws" && userType !== "ws";
  const isRegularUser =
    isUserPresent.user_type === "user" && userType !== "user";
  if (isAdminUser || isRegularUser || isWsUser) {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.INVALID_USER_CRED),
    };
  }

  if (!isUserPresent.status) {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.ACCOUNT_SUSPENDED),
    };
  }

  if (isUserPresent.user_type === "ws" && !isUserPresent.is_profile_verified) {
    return await handleEmailNotVerified({ isUserPresent, email, res });
    // throw {
    //   code: httpResponses.EMAIL_NOT_VERIFIED,
    //   message: res.__(serverResponseMessage.EMAIL_NOT_VERIFIED),
    // }
  }

  const userPresent = User.hydrate({ ...isUserPresent });
  const isPasswordMatched = await userPresent.comparePassword(password);
  if (isPasswordMatched) {
    let token = await generateToken(isUserPresent);
    const updateUser = await UpdateData(isUserPresent, {
      token: token,
    });
    delete updateUser.password;
    // if (isUserPresent.user_type == "admin") {
    // const getSettingData = await getSetting();
    // updateUser.logo = getSettingData.image || "";
    // }
    return res.json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.LOGIN_SUCCESSFULLY),
        { ...updateUser, measurements: isUserPresent?.measurements }
      )
    );
  } else {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.INVALID_USER_CRED),
    };
  }
};

exports.logout = async (req, res) => {
  const isUserPresent = await getUserById(req.userId);
  if (!isUserPresent.token) {
    throw {
      code: httpResponses.UNAUTHORIZED,
      message: res.__(serverResponseMessage.ACCOUNT_SUSPENDED),
    };
  }
  req.body._id = req.userId;
  delete req.userId;
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.LOGOUT_SUCCESSFULLY)
    )
  );
};

exports.resetPassword = async (req, res) => {
  const { userId } = req;
  const { newPassword, oldPassword } = req.body;
  const isUserPresent = await getUserData({
    _id: new ObjectId(userId),
  });
  const userPresent = User.hydrate(isUserPresent);
  const isPasswordMatched = await userPresent.comparePassword(oldPassword);
  if (!isPasswordMatched) {
    throw {
      code: httpResponses.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.OLD_PASSWORD_INCORRECT),
    };
  }
  let password = bcrypt.hashSync(newPassword, 10);
  await UpdateData(isUserPresent, {
    password: password,
    token: null,
  });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.PASSWORD_RESET_SUCCESSFULLY)
    )
  );
};

exports.forgotPassword = async (req, res) => {
  const { email, user_type = "user" } = req.body;
  const isUserPresent = await getUserData({
    email: email,
  });
  if (!isUserPresent) {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }

  let token = await generateTemporaryToken({
    email,
    userId: isUserPresent._id,
    time: new Date(),
  });

  await UpdateData(isUserPresent, {
    token: token,
  });

  const url = `${
    user_type === "user" ? config.USER_DOMAIN_URL : config.ADMIN_DOMAIN_URL
  }/${
    user_type === "admin" ? "admin/auth/" : user_type === "ws" ? "ws/auth/" : ""
  }forgot-password/${token}`;

  await sendForgotPasswordEmail(isUserPresent.email, url);
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.FORGOT_PASSWORD_SUCCESS),
      {
        token,
        url: url,
      }
    )
  );
};

exports.setNewPassword = async (req, res) => {
  const { userId } = req;
  const { newPassword } = req.body;
  const isUserPresent = await getUserById(userId);
  if (!isUserPresent) {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }

  let password = bcrypt.hashSync(newPassword, 10);

  await UpdateData(isUserPresent, {
    password: password,
    token: null,
  });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.FORGOT_PASSWORD_SET_NEW_SUCCESS)
    )
  );
};
