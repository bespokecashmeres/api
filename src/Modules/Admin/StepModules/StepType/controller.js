const { serverResponseMessage } = require("../../../../../config/message");
const { httpResponses } = require("../../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../../utils/http-status-codes");
const { success } = require("../../../../../utils/response");
const CostCalculations = require("../../CostCalculation/schema");
const { getYarnStepData, getDetailsById } = require("../../Yarn/dbQuery");
const { findOneRecord: stepCardFindOneRecord, getStepListByStepType, getStepCardData } = require("../StepCard/dbQuery");
const {
  create,
  Update,
  getById,
  DeleteById,
  findAll,
  rowsReorderData,
  getTabsData,
  getDataForDropdown,
  getStepDetailsBySlugAndId,
  getSteps,
} = require("./dbQuery");
const { ObjectId } = require("mongoose").Types;

exports.createController = async (req, res) => {
  try {
    req.body.name = req.body.name ? JSON.parse(req.body.name) : {};
    req.body.info = req.body.info ? JSON.parse(req.body.info) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }

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
  const isExsist = await getById(_id);
  if (!isExsist)
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };

  try {
    req.body.name = req.body.name ? JSON.parse(req.body.name) : {};
    req.body.info = req.body.info ? JSON.parse(req.body.info) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }

  const updateRecord = await Update(req.body);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED),
        updateRecord
      )
    );
};

exports.tabsController = async (req, res, next) => {
  const { productTypeId } = req.params;
  const acceptLanguage = req.headers["accept-language"];
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getTabsData({ language: acceptLanguage, productTypeId }, {})
      )
    );
};

exports.rowsReorderController = async (req, res, next) => {
  const { rows } = req.body;
  if (rows) {
    req.body.rows = JSON.parse(rows);
  }

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await rowsReorderData(req.body.rows)
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
  const category = await getById(req.body._id);
  if (!category) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }
  // Todo: prevent deletetion of this if used in product or cart, or order

  await Update({ _id: `${category.id}`, status: !!req.body.status });

  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_UPDATED),
      undefined
    )
  );
};

exports.getActiveController = async (req, res, next) => {
  const { productTypeId } = req.params;
  const acceptLanguage = req.headers["accept-language"];
  const isExsist = await findAll({ language: acceptLanguage, productTypeId });
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

exports.dropdownOptionsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const { productTypeId } = req.params;
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        await getDataForDropdown(acceptLanguage, productTypeId)
      )
    );
};

exports.stepFullViewController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const { yarn, gauge, style, fitting, productTypeId } = req.body;
  const [stepList, yarnData, gaugeData, styleData, fittingData] = await Promise.all([getSteps(productTypeId, acceptLanguage), getDetailsById(yarn, acceptLanguage), getStepDetailsBySlugAndId("gauge", gauge, acceptLanguage), getStepDetailsBySlugAndId("style", style, acceptLanguage), getStepDetailsBySlugAndId("fitting", fitting, acceptLanguage)]);

  // const response  = await CostCalculations.findOne({ gauge: gaugeData.stepCard.slug, size: 'xs' })
  // console.log("response: ", response);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        { yarn: yarnData, steps: stepList, gauge: gaugeData, style: styleData, fitting: fittingData }
      )
    );
}

exports.stepDetailsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const { yarn, gauge, style, fitting, nextStepSlug, productTypeId } = req.body;

  // Fetch yarn and step list data in parallel
  const yarnData = await getYarnStepData(yarn, acceptLanguage);

  // Prepare optional data fetching promises
  const optionalDataPromises = [];
  if (nextStepSlug) {
    optionalDataPromises.push(getStepListByStepType(nextStepSlug, productTypeId, acceptLanguage));
  } else {
    optionalDataPromises.push(Promise.resolve([]));
  }

  if (gauge) {
    optionalDataPromises.push(getStepCardData(gauge, acceptLanguage));
  } else {
    optionalDataPromises.push(Promise.resolve(undefined));
  }

  if (style) {
    optionalDataPromises.push(getStepCardData(style, acceptLanguage));
  } else {
    optionalDataPromises.push(Promise.resolve(undefined));
  }

  if (fitting) {
    optionalDataPromises.push(getStepCardData(fitting, acceptLanguage));
  } else {
    optionalDataPromises.push(Promise.resolve(undefined));
  }

  // Fetch optional data in parallel
  const [stepList, gaugeData, styleData, fittingData] = await Promise.all(optionalDataPromises);


  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        { yarn: yarnData, list: stepList, gauge: gaugeData, style: styleData, fitting: fittingData }
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
  const isStepCard = await stepCardFindOneRecord({
    stepTypeId: new ObjectId(_id),
  });

  if (isStepCard) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(
        serverResponseMessage.PLEASE_DELETE_STEP_CARD_TO_DELETE_STEP_TYPE
      ),
    };
  }

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
