const { serverResponseMessage } = require("../../../../config/message");

const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const {
  create,
  Update,
  getById,
  getPaginationData,
  findOneRecord,
  GenderExist,
  DeleteById,
} = require("./dbQuery");

exports.createController = async (req, res, next) => {

  const {genderId} = req.body;

  const isExsist = await findOneRecord({ faqId: req.body.faqId });
  if (isExsist)
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.YARN_ID_ALREADY_EXISTS),
    };

    const isGenderExist = await GenderExist(genderId);
    if(!isGenderExist){
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
      };
    }




    // try {
    //   req.body.title = req.body.title ? JSON.parse(req.body.title) : {};
    // } catch (error) {
    //   throw {
    //     code: httpStatusCodes.BAD_REQUEST,
    //     message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    //   };
    // }

    //  try {
    //   req.body.description = req.body.description ? JSON.parse(req.body.description) : {};
    // } catch (error) {
    //   throw {
    //     code: httpStatusCodes.BAD_REQUEST,
    //     message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    //   };
    // }



  const createRecord = await create(req.body);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.CREATED,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_CREATED),
        createRecord
      )
    );
};

exports.updateController = async (req, res, next) => {
  const { _id } = req.body;

  // Fetch the existing record
  const isExsist = await getById(_id);
  if (!isExsist) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  // Parse the multilingual data for the main record
  // try {
  //   req.body.title = req.body.title ? JSON.parse(req.body.title) : {};
  // } catch (error) {
  //   throw {
  //     code: httpStatusCodes.BAD_REQUEST,
  //     message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
  //   };
  // }



  // Update the record with the new data (including yarns)
  const updatedRecord = await Update(req.body);

  // Return success response
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED),
        updatedRecord
      )
    );
};

exports.listController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getPaginationData({ language: acceptLanguage, ...req.body })
      )
    );
};


exports.deleteController = async (req, res, next) => {
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


exports.getDetailController = async (req, res, next) => {
  const { _id } = req.params;
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        isExsist
      )
    );
};

exports.statusController = async (req, res, next) => {
  const isExist = await getById(req.body._id);
  if (!isExist) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }
  await Update({ _id: `${isExist.id}`, status: !!req.body.status });
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_UPDATED),
      undefined
    )
  );
};
