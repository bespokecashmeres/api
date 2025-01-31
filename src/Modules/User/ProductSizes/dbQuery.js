const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("../../Admin/FittingModule/FittingSizes/schema");
RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.getAvailableSizes = async (language = DEFAULT_LOCALE) => {
  return await database.find({ status: true }).select({ _id: 0, name: `$name.${language}`, slug: 1 });
}