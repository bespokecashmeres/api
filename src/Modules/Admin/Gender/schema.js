"use strict";
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { httpResponses } = require("../../../../utils/http-responses");
const Schema = mongoose.Schema;

const genderSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
      unique: true,
    },
    status: {
      type: Schema.Types.Boolean,
      enum: [true, false],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

genderSchema.pre("save", async function (next) {
  const Gender = this.model("gender");
  try {
    const gender = await Gender.findOne({
      $or: [{ name: this.name }],
    });
    if (gender) {
      const errorField = serverResponseMessage.GENDER_ALREADY_EXISTS;
      const error = new Error(errorField);
      error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
      error.status = httpStatusCodes.BAD_REQUEST;
      return next(error);
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Gender = mongoose.model("gender", genderSchema);
module.exports = Gender;
