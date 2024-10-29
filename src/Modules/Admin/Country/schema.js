
"use strict";
const mongoose = require("mongoose");
const { serverResponseMessage } = require("../../../../config/message");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");
const { httpResponses } = require("../../../../utils/http-responses");
const Schema = mongoose.Schema;

const countrySchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            require: true,
            unique: true
        },
        code: {
            type: Schema.Types.String,
            require: true,
            unique: true
        },
        phoneCode: {
            type: Schema.Types.String,
            require: true,
        },
        flag: {
            type: Schema.Types.String,
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

countrySchema.pre("save", async function (next) {
    const Country = this.model('country');
    try {
        const country = await Country.findOne({
            $or: [{ name: this.name }, { code: this.code }]
        });
        if (country) {
            const errorField = user.name === this.name ? serverResponseMessage.COUNTRY_NAME_EXISTS : serverResponseMessage.COUNTRY_CODE_EXISTS;
            const error = new Error(errorField);
            error.code = httpResponses.DUPLICATE_FIELD_VALUE_ERROR;
            error.status = httpStatusCodes.BAD_REQUEST;
            return next(error);
        }
        next();
    } catch (err) {
        next(err);
    }
})

const Country = mongoose.model("country", countrySchema);
module.exports = Country;