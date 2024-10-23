"use strict";
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      default: "",
    },
    middle_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
    password: {
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
      required: [true, "country is required"],
      ref: "country",
      default: "",
    },
    height: {
      type: Schema.Types.String,
      default: "",
    },
    weight: {
      type: Schema.Types.String,
      default: "",
    },
    gender: {
      type: String,
      default: "men",
      enum: ["men", "women"],
    },
    news_letter: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    status: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
    profile_picture: {
      type: String,
      default: null,
    },
    is_profile_verified: {
      type: Boolean,
      default: false,
    },
    user_type: {
      type: String,
      enum: ["admin", "user", "ws"],
      default: "user",
    },
    token: {
      type: String,
      default: null,
    },
    isMeasurementAdded: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("findOneAndUpdate", async function (next) {
  const SchemaModel = mongoose.model("users", userSchema);
  const filter = this.getFilter();
  const mobile_number = this.get("mobile_number");
  const email = this.get("email");
  const result = await SchemaModel.findOne({
    $and: [
      { $or: [{ mobile_number }, { email }] },
      { _id: { $ne: filter._id } },
    ],
  });
  if (result) {
    const errorField =
      result.mobile_number === mobile_number
        ? serverResponseMessage.MOBILE_NUMBER_EXISTS
        : serverResponseMessage.EMAIL_EXISTS;
    const error = new Error(errorField);
    error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
    error.status = httpStatusCodes.BAD_REQUEST;
    return next(error);
  }
});

// Encypting passwords before saving
userSchema.pre("save", async function (next) {
  const User = this.model("users");
  try {
    const user = await User.findOne({
      $or: [{ mobile_number: this.mobile_number }, { email: this.email }],
    });
    if (user) {
      const errorField =
        user.mobile_number === this.mobile_number
          ? serverResponseMessage.MOBILE_NUMBER_EXISTS
          : serverResponseMessage.EMAIL_EXISTS;
      const error = new Error(errorField);
      error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
      error.status = httpStatusCodes.BAD_REQUEST;
      return next(error);
    }

    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare user password in database password
userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const user = mongoose.model("users", userSchema);
module.exports = user;
