const fs = require("fs");
const { config } = require("../config/config");

module.exports.getTokenTimeDifference = (decodedTime) => {
  // Convert the timestamp to a Date object
  const timestampDate = new Date(decodedTime);

  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - timestampDate;

  return timeDifference;
};

// To delete file
module.exports.deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Failed to delete file: ${filePath}`, err);
    } else {
      console.log(`Successfully deleted file: ${filePath}`);
    }
  });
};

module.exports.addTimestampAndRemoveSpaces = (fileName) => {
  const sanitizedFileName = fileName.replace(/\s+/g, "");
  const newFileName = `${Date.now()}_${sanitizedFileName}`;
  return newFileName;
};

module.exports.SHOP_INFO = {
  currencySymbol: "kr.",
  country: "DK",
};

module.exports.getAWSImageUrl = (imageKey) => {
  if (!imageKey) return "";
  return `${config.BIT_BUCKET_DOMAIN}${imageKey}`;
};

module.exports.generateRandomString = (length = 5) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};
