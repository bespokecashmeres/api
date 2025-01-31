const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { getTotalCost } = require("../../../../utils/common");

const {
  getPaginationData,
  getProductCostCalculationsDetails,
  getProductDetails,
} = require("./dbQuery");

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

exports.productDetailsController = async (req, res, next) => {
  const language = req.headers["accept-language"];
  const { _id } = req.params;
  const productDetails = await getProductDetails(_id, language);

  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        productDetails
      )
    );
}

exports.productPriceBySizeController = async (req, res, next) => {
  const { _id, size = 'xs' } = req.body;
  const productDetails = await getProductCostCalculationsDetails(_id);
  const totalCost = await getTotalCost({ 
    gauge: productDetails.steps.gauge,
    pattern: productDetails.steps.pattern,
    style: productDetails.steps.style,
    materialPrice: productDetails.materialPrice,
    size
   });


  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_FETCHED),
        { price: totalCost }
      )
    );
}
