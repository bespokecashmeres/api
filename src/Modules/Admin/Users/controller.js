const { ObjectId } = require("mongoose").Types;
const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  userCreate,
  userUpdate,
  getAllUsersByAdmin,
  getActiveUsers,
  getUserById,
  getUserAndMeasurementById,
  getUserProfileById,
  getWsById,
} = require("./dbQuery");
const { isUserPresent } = require("../../../../services/userServices");
const { updateMeasurement } = require("../Measurement/validation");
const { getUserData } = require("../Authentication/dbQuery");
const { uploadToS3, deleteFromS3 } = require("../../../../utils/fileUploads");

exports.createUserController = async (req, res) => {
  const userCreateResponse = await userCreate(req.body);
  if (!userCreateResponse) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_CREATE_USER),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_CREATED_SUCCESSFULLY),
      undefined
    )
  );
};

exports.createUserAndMeasurementController = async (req, res) => {
  const { measurements, ...restBody } = req.body;

  const userCreateResponse = await userCreate(restBody);
  if (!userCreateResponse) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_CREATE_USER),
    };
  }

  if (restBody.isMeasurementAdded) {
    await updateMeasurement({
      measurements: measurements ? JSON.parse(measurements) : undefined,
      user_id: userCreateResponse._id,
    });
  }
  return res.json(
    success(
      httpStatusCodes.CREATED,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_CREATED_SUCCESSFULLY),
      userCreateResponse
    )
  );
};

exports.createWholeSalerController = async (req, res) => {
  const userCreateResponse = await userCreate(req.body);
  if (!userCreateResponse) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_CREATE_USER),
    };
  }

  return res.json(
    success(
      httpStatusCodes.CREATED,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_CREATED_SUCCESSFULLY),
      userCreateResponse
    )
  );
};

exports.updateUserAndMeasurementController = async (req, res) => {
  const user = await getUserById(req.body._id);

  if (!user) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }

  const { measurements, ...restBody } = req.body;

  const { mobile_number, email, _id, ...updatableData } = restBody;

  const updatedUser = await userUpdate(_id, {
    ...updatableData,
    ...(mobile_number !== user.mobile_number ? { mobile_number } : {}),
    ...(email !== user.email ? { email } : {}),
  });

  if (!updatedUser) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_UPDATE_USER),
    };
  }

  if (user.isMeasurementAdded || restBody.isMeasurementAdded) {
    await updateMeasurement({
      measurements: measurements ? JSON.parse(measurements) : undefined,
      user_id: updatedUser._id,
    });
  }

  delete updatedUser.password;

  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_UPDATED_SUCCESSFULLY),
      updatedUser
    )
  );
};

exports.updateWholeSalerController = async (req, res, next) => {
  const user = await getUserById(req.body._id);
  if (!user) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }

  const { mobile_number, email, _id, ...updatableData } = req.body;
  const updatedUser = await userUpdate(_id, {
    ...updatableData,
    ...(mobile_number !== user.mobile_number ? { mobile_number } : {}),
    ...(email !== user.email ? { email } : {}),
  });
  if (!updatedUser) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_UPDATE_USER),
    };
  }
  delete updatedUser.password;
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_UPDATED_SUCCESSFULLY),
      { ...updatedUser, measurements: user.measurements }
    )
  );
};

exports.updateUserController = async (req, res, next) => {
  const { userId } = req;
  const user = await getUserData({ _id: new ObjectId(userId) });
  if (!user) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }

  const profilePicture = req.files?.["profile_picture"]
    ? req.files["profile_picture"][0]
    : null;

  if (profilePicture) {
    try {
      req.body.profile_picture = await uploadToS3(profilePicture, "profile");
      if (user?.profile_picture) {
        await deleteFromS3(user.profile_picture);
      }
    } catch (error) {}
  }

  const { mobile_number, email, ...updatableData } = req.body;
  const updatedUser = await userUpdate(userId, {
    ...updatableData,
    ...(mobile_number !== user.mobile_number ? { mobile_number } : {}),
    ...(email !== user.email ? { email } : {}),
  });
  if (!updatedUser) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_UPDATE_USER),
    };
  }
  delete updatedUser.password;
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_UPDATED_SUCCESSFULLY),
      { ...updatedUser, measurements: user.measurements }
    )
  );
};

exports.updateUserStatusController = async (req, res, next) => {
  const user = await getUserById(req.body._id);
  if (!user) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }
  await userUpdate(user._id, {
    status: !!req.body.status,
  });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_UPDATED_SUCCESSFULLY),
      undefined
    )
  );
};

exports.getUserController = async (req, res, next) => {
  const isExists = await isUserPresent(req, res, next);
  if (!isExists) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.USER_DOES_NOT_EXIST),
    };
  }
  const user = await getUserProfileById(req.userId);
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      user
    )
  );
};

exports.getUserAndMeasurementController = async (req, res, next) => {
  const user = await getUserAndMeasurementById(req.params._id);
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      user
    )
  );
};

exports.getWholeSalerController = async (req, res, next) => {
  const user = await getWsById(req.params._id);
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      user
    )
  );
};

exports.getAllWholeSalerController = async (req, res, next) => {
  const user = await isUserPresent(req, res, next);
  if (user?.user_type !== "admin") {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.UNAUTHORIZED),
    };
  }
  const users = await getAllUsersByAdmin(req.body, "ws");
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      users
    )
  );
};

exports.getAllUsersController = async (req, res, next) => {
  const user = await isUserPresent(req, res, next);
  if (user?.user_type !== "admin") {
    throw {
      code: httpStatusCodes.UNAUTHORIZED,
      message: res.__(serverResponseMessage.UNAUTHORIZED),
    };
  }
  const users = await getAllUsersByAdmin(req.body);
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      users
    )
  );
};

exports.getActiveUsersController = async (req, res, next) => {
  const users = await getActiveUsers();
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      users
    )
  );
};

exports.getActiveWholeSalerController = async (req, res, next) => {
  const users = await getActiveUsers("ws");
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      users
    )
  );
};
