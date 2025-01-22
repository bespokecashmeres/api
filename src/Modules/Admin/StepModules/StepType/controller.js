const { serverResponseMessage } = require("../../../../../config/message");
const { calculateFinalPrice } = require("../../../../../utils/common");
const { httpResponses } = require("../../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../../utils/http-status-codes");
const { success } = require("../../../../../utils/response");
const AdditionalCostCalculations = require("../../AdditionalCostCalculation/schema");
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
  const { yarn, steps = {}, productTypeId } = req.body;
  
  // Extract step IDs from steps object
  const gaugeId = steps.gauge;
  const patternId = steps.pattern;
  const styleId = steps.style;
  const fittingId = steps.fitting;

  const [stepList, yarnData, gaugeData, patternData, styleData, fittingData] = await Promise.all([
    getSteps(productTypeId, acceptLanguage),
    getDetailsById(yarn, acceptLanguage),
    getStepDetailsBySlugAndId("gauge", gaugeId, acceptLanguage),
    getStepDetailsBySlugAndId("pattern", patternId, acceptLanguage),
    getStepDetailsBySlugAndId("style", styleId, acceptLanguage),
    getStepDetailsBySlugAndId("fitting", fittingId, acceptLanguage)
  ]);

  const costCalculation = await CostCalculations.findOne({ 
    gauge: gaugeData.stepCard.slug, 
    size: 'xs', 
    pattern: patternData.stepCard.slug 
  });
  
  const additionalCostResponse = await AdditionalCostCalculations.findOne({ 
    slug: styleData.stepCard.slug 
  });

  const totalFactoryCost = yarnData.price * costCalculation.weightPerGram * costCalculation.knitWastage / 1000 
    + costCalculation.manufacturingCost 
    + costCalculation.trimsCost 
    + costCalculation.laborCost;

  const totalCost = calculateFinalPrice(totalFactoryCost, additionalCostResponse.calculations);

  return res.status(httpStatusCodes.SUCCESS).json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      { 
        yarn: { ...yarnData, price: totalCost.toFixed(2) }, 
        steps: stepList, 
        gauge: gaugeData, 
        pattern: patternData, 
        style: styleData, 
        fitting: fittingData 
      }
    )
  );
}

exports.stepDetailsController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const { yarn, steps = {}, nextStepSlug, productTypeId } = req.body;

  // Fetch yarn data
  const yarnData = await getYarnStepData(yarn, acceptLanguage);

  // Prepare optional data fetching promises
  const optionalDataPromises = [];
  
  // Handle step list if nextStepSlug is provided
  if (nextStepSlug) {
    optionalDataPromises.push(getStepListByStepType(nextStepSlug, productTypeId, acceptLanguage));
  } else {
    optionalDataPromises.push(Promise.resolve([]));
  }

  // Create a map to store step data
  const stepDataMap = {};
  
  // Add promises for each step in the steps object
  Object.entries(steps).forEach(([key, value]) => {
    if (value) {
      optionalDataPromises.push(getStepCardData(value, acceptLanguage));
      stepDataMap[key] = optionalDataPromises.length; // Store the index for later mapping
    }
  });

  // Fetch all data in parallel
  const results = await Promise.all(optionalDataPromises);
  
  // Map the results to their corresponding keys
  const responseData = {
    yarn: yarnData,
    list: results[0], // stepList is always first in results
  };

  // Map step data to their corresponding keys
  Object.keys(steps).forEach(key => {
    if (steps[key] && stepDataMap[key]) {
      responseData[key] = results[stepDataMap[key] - 1];
    }
  });

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        responseData
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
