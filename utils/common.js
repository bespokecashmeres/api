const fs = require("fs");
const { config } = require("../config/config");
const { findOneRecord } = require("../src/Modules/Admin/Yarn/dbQuery");
const { ObjectId } = require("mongoose").Types;

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
/**
 * Generates a dynamic MongoDB query with regex conditions for a given property.
 *
 * @param {Object} dataObject - The object containing the fields to match (e.g., `req.body.name`).
 * @param {String} prop - The parent field name (e.g., `name`, `title`).
 * @param {String} excludeId - The MongoDB ObjectId to exclude from the query.
 * @returns {Object} - The MongoDB query object.
 */
module.exports.generateDynamicQuery = (dataObject, prop, excludeId) => {
  if (!dataObject || Object.keys(dataObject).length === 0) {
    throw new Error("Invalid data object. Cannot generate query.");
  }

  const conditions = [];

  // Loop through each property in the dataObject
  for (const key in dataObject) {
    if (Object.hasOwnProperty.call(dataObject, key) && dataObject?.[key]?.length) {
      conditions.push({
        [`${prop}.${key}`]: { $regex: `^${dataObject[key]}$`, $options: "i" },
      });
    }
  }

  if (conditions.length === 0) {
    throw new Error("No valid conditions generated for the query.");
  }

  const query = { $or: conditions };

  // Add the condition to exclude the specified _id if provided
  if (excludeId) {
    if (!ObjectId.isValid(excludeId)) {
      throw new Error("Invalid ObjectId provided for exclusion.");
    }
    query.$and = [{ _id: { $ne: new ObjectId(excludeId) } }];
  }

  return query;
};

module.exports.generateYarnId = async () => {
  let yarnId;
  let isExsist;

  do {
    // Generate a new yarnId
    yarnId = Math.floor(10000000 + Math.random() * 90000000);

    // Check if it exists in the database
    isExsist = await findOneRecord({ yarnId });
  } while (isExsist); // Repeat if the ID exists

  return yarnId; // Return the unique ID
};

module.exports.calculateFinalPrice = (initialPrice, calculations) => {
  let finalPrice = initialPrice;

  calculations.forEach(calculation => {
    const { value, operation, unit } = calculation;

    if (unit === "number") {
      switch (operation) {
        case "increase":
          finalPrice += value;
          break;
        case "decrease":
          finalPrice -= value;
          break;
        case "multiply":
          finalPrice *= value;
          break;
        case "divide":
          if (value !== 0) {
            finalPrice /= value;
          } else {
            throw new Error("Cannot divide by zero.");
          }
          break;
        default:
          throw new Error(`Unsupported operation: ${operation}`);
      }
    } else if (unit === "percentage") {
      switch (operation) {
        case "multiply":
          finalPrice *= (value / 100);
          break;
        default:
          throw new Error(`Unsupported operation: ${operation}`);
      }
    } else {
      throw new Error(`Unsupported unit: ${unit}`);
    }
  });

  return finalPrice;
}
