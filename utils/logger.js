"use strict";
const winston = require("winston");
const moment = require("moment");

const isoDate = moment.utc().format("Y-MM-DD");
const logger = new winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      timestamp: true,
      colorize: true,
      silent: true,
    }),
    new winston.transports.File({
      filename: `./logs/${isoDate}.log`,
      level: "info",
    }),
  ],
});
module.exports = { logger };
