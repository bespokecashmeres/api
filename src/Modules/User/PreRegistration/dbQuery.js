const database = require("./schema");
RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.userCreate = async (req) => {
  return await database.create(req);
};
