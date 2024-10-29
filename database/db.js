const mongoose = require("mongoose");
const { config } = require("../config/config");
const { serverResponseMessage } = require("../config/message");

const connectToDatabase = async () => {
  try {
    let dbString = config.developmentUrl;
    if (config.envoirment == config.production) {
      dbString = config.productionUrl;
    }
    await mongoose.connect(dbString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return serverResponseMessage.CONNECTED_WITH_DB;
  } catch (error) {
    return error;
  }
};

module.exports = connectToDatabase;
