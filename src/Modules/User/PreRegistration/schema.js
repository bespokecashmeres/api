"use strict";

const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const Schema = mongoose.Schema;

const preUserRegistrationSchema = new Schema(
  {
    first_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
    mobile_number: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    country_id: {
      type: Schema.Types.ObjectId,
      ref: "countries",
      default: null,
    },
    gender_id: {
      type: Schema.Types.ObjectId,
      ref: "genders",
      required: true,
    },
    status: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Encypting passwords before saving
preUserRegistrationSchema.pre("save", async function (next) {
  const User = this.model("preuserregistrations");
  try {
    const user = await User.findOne({
      $or: [{ email: this.email }],
    });
    if (user) {
      const errorField = serverResponseMessage.EMAIL_EXISTS;
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

const PreUserRegistrations = mongoose.model(
  "preuserregistrations",
  preUserRegistrationSchema
);
module.exports = PreUserRegistrations;
