"use strict";
const mongoose = require("mongoose");
const { MODULE_INFO_TYPES } = require("../../../../../utils/constants");
const Types = mongoose.Schema.Types;

const moduleInfoSchema = new mongoose.Schema({
  info: {
    type: Types.Object,
    required: true,
    default: {},
  },
  image: {
    type: Types.String,
    default: "",
  },
  type: {
    type: Types.String,
    enum: MODULE_INFO_TYPES,
    unique: true,
    required: true,
  },
  status: {
    type: Types.Boolean,
    default: true,
  },
});

const ModuleInfo = mongoose.model("moduleinfos", moduleInfoSchema);

module.exports = ModuleInfo;
