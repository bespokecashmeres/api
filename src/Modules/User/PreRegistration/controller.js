const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  userCreate,
  getPaginationData,
  getById,
  DeleteById,
} = require("./dbQuery");
const sendEmail = require("../../../../utils/sendMail");
const { config } = require("../../../../config/config");
const { generateEmailHtmlPreRegistration } = require("../../../../utils/email");

exports.createUserController = async (req, res) => {
  const userCreateResponse = await userCreate(req.body);
  if (!userCreateResponse) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.UNABLE_TO_CREATE_USER),
    };
  }

  try {
    const htmlContent = generateEmailHtmlPreRegistration({
      firstName: userCreateResponse.first_name,
      lastName: userCreateResponse.last_name,
    });
    await sendEmail(
      userCreateResponse.email,
      config.PRE_REGISTRATION,
      "",
      htmlContent
    );
  } catch (err) {}

  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.USER_CREATED_SUCCESSFULLY),
      undefined
    )
  );
};

exports.listController = async (req, res, next) => {
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getPaginationData(req.body)
      )
    );
};

exports.deleteController = async (req, res) => {
  const { _id } = req.params;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  const deleteIndex = await DeleteById(_id);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_DELETED),
        deleteIndex
      )
    );
};
