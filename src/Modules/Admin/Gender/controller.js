const { serverResponseMessage } = require("../../../../config/message");
const {
  createNameRecordHandler,
  updateNameRecordHandler,
  fetchPaginatedRecordsHandler,
  fetchRecordDetailsHandler,
  deleteRecordHandler,
  updateRecordStatusHandler,
  fetchDropdownOptionsHandler,
  checkRecordDoesNotExists,
} = require("../../../../utils/baseController");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { success } = require("../../../../utils/response");
const modelOperations = require("./dbQuery");
const {
  findOneRecord: mainCategoryFindRecord,
} = require("../MainCategory/dbQuery");
const {
  findOneRecord: subCategoryFindRecord,
} = require("../SubCategory/dbQuery");
const {
  findOneRecord: childCategoryFindRecord,
} = require("../ChildCategory/dbQuery");
const {
  findOneRecord: subChildCategoryFindRecord,
} = require("../SubChildCategory/dbQuery");
const { findOneRecord: yarnFindRecord } = require("../Yarn/dbQuery");
const {
  findOneRecord: preRegistrationFindRecord,
} = require("../../User/PreRegistration/dbQuery");
const { ObjectId } = require("mongoose").Types;

exports.createController = async (req, res, next) => {
  return createNameRecordHandler(req, res, modelOperations);
};

exports.updateController = async (req, res, next) => {
  return updateNameRecordHandler(req, res, modelOperations);
};

exports.listController = async (req, res, next) => {
  return fetchPaginatedRecordsHandler(req, res, modelOperations);
};

exports.getDetailController = async (req, res, next) => {
  return fetchRecordDetailsHandler(req, res, modelOperations);
};

const genderDeleteOrStatusStatuses = async (genderId, checkStatus = false) => {
  const [
    mainCategoryResult,
    subCategoryResult,
    childCategoryResult,
    subChildCategoryResult,
    yarnResult,
    preRegistrationResult,
  ] = await Promise.allSettled([
    mainCategoryFindRecord({
      genderId: new ObjectId(genderId),
      ...(checkStatus ? { status: true } : {}),
    }),
    subCategoryFindRecord({
      genderId: new ObjectId(genderId),
      ...(checkStatus ? { status: true } : {}),
    }),
    childCategoryFindRecord({
      genderId: new ObjectId(genderId),
      ...(checkStatus ? { status: true } : {}),
    }),
    subChildCategoryFindRecord({
      genderId: new ObjectId(genderId),
      ...(checkStatus ? { status: true } : {}),
    }),
    yarnFindRecord({
      genderId: new ObjectId(genderId),
      ...(checkStatus ? { status: true } : {}),
    }),
    preRegistrationFindRecord({
      gender_id: new ObjectId(genderId),
      ...(checkStatus ? { status: true } : {}),
    }),
  ]);

  const isMainCategory =
    mainCategoryResult.status === "fulfilled" ? mainCategoryResult.value : null;
  const isSubCategory =
    subCategoryResult.status === "fulfilled" ? subCategoryResult.value : null;
  const isChildCategory =
    childCategoryResult.status === "fulfilled"
      ? childCategoryResult.value
      : null;
  const isSubChildCategory =
    subChildCategoryResult.status === "fulfilled"
      ? subChildCategoryResult.value
      : null;
  const isYarn = yarnResult.status === "fulfilled" ? yarnResult.value : null;
  const isPreRegistration =
    preRegistrationResult.status === "fulfilled"
      ? preRegistrationResult.value
      : null;
  return {
    isMainCategory,
    isSubCategory,
    isChildCategory,
    isSubChildCategory,
    isYarn,
    isPreRegistration,
  };
};

exports.deleteController = async (req, res, next) => {
  const { _id } = req.params;
  await checkRecordDoesNotExists(_id, res, modelOperations);

  const {
    isChildCategory,
    isMainCategory,
    isPreRegistration,
    isSubCategory,
    isSubChildCategory,
    isYarn,
  } = await genderDeleteOrStatusStatuses(_id);

  if (
    isMainCategory ||
    isSubCategory ||
    isChildCategory ||
    isSubChildCategory ||
    isYarn ||
    isPreRegistration
  ) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(
        serverResponseMessage[
          `PLEASE_DELETE${isMainCategory ? "_MAIN_CATEGORY" : ""}${
            isSubCategory ? "_SUB_CATEGORY" : ""
          }${isChildCategory ? "_CHILD_CATEGORY" : ""}${
            isSubChildCategory ? "_SUB_CHILD_CATEGORY" : ""
          }${isYarn ? "_YARN" : ""}${
            isPreRegistration ? "_PRE_REGISTRATION" : ""
          }${isSubChildCategory ? "" : ""}_TO_DELETE_GENDER`
        ]
      ),
    };
  }
  return deleteRecordHandler(req, res, modelOperations, true);
};

exports.statusController = async (req, res, next) => {
  const { _id } = req.body;
  await checkRecordDoesNotExists(_id, res, modelOperations);

  const {
    isChildCategory,
    isMainCategory,
    isSubCategory,
    isSubChildCategory,
    isYarn,
  } = await genderDeleteOrStatusStatuses(_id, true);

  if (
    isMainCategory ||
    isSubCategory ||
    isChildCategory ||
    isSubChildCategory ||
    isYarn
  ) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(
        serverResponseMessage[
          `PLEASE_DISABLE${isMainCategory ? "_MAIN_CATEGORY" : ""}${
            isSubCategory ? "_SUB_CATEGORY" : ""
          }${isChildCategory ? "_CHILD_CATEGORY" : ""}${
            isSubChildCategory ? "_SUB_CHILD_CATEGORY" : ""
          }${isYarn ? "_YARN" : ""}${
            isSubChildCategory ? "" : ""
          }_TO_DISABLE_GENDER`
        ]
      ),
    };
  }

  return updateRecordStatusHandler(req, res, modelOperations, true);
};

exports.dropdownOptionsController = async (req, res, next) => {
  return fetchDropdownOptionsHandler(req, res, modelOperations);
};

exports.getActiveController = async (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const activeList = await modelOperations.getActive(acceptLanguage);
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        activeList
      )
    );
};
