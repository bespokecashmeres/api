const { SHOP_INFO } = require("./common");

module.exports.formatToDKK = (number = 0) => {
  // Check if the number is 0 and return 'kr 0,00' directly
  if (number === 0) {
    return `${SHOP_INFO.currencySymbol} 0`;
  }

  // Format the number to DKK using da-DK locale
  const formattedNumber = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  const cleanNumber = formattedNumber.replace(/kr\.?/, "").trim()?.replace(",00", "");

  return `${SHOP_INFO.currencySymbol} ${cleanNumber}`;
};
