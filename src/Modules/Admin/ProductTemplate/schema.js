const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createProductSchema = new Schema({
  title: {
    type: Map,
    of: String,
    required: true
  },
  images: {
    type: Schema.Types.Array,
    required: true,
    default: []
  },
  contents: [{
    title: {
      type: Map,
      of: String,
      required: true
    },
    description: {
      type: Map,
      of: String,
      required: true
    },
    _id: false
  }],
  yarn: {
    type: Schema.Types.ObjectId,
    ref: 'yarns',
    required: true
  },
  steps: [{
    stepType: {
      type: Schema.Types.ObjectId,
      ref: 'steptypes',
      required: true
    },
    stepCard: {
      type: Schema.Types.ObjectId,
      ref: 'stepcards',
      required: true
    },
    _id: false
  }],
  productTypeId: {
    type: Schema.Types.ObjectId,
    ref: "producttypes",
    required: true,
  },
  relatedProducts: {
    type: Schema.Types.Array,
    default: [],
    ref: "producttemplates"
  },
  genderId: {
    type: Schema.Types.ObjectId,
    ref: "genders",
    required: true,
  },
  status: {
    type: Boolean,
    default: true
  },
  basePriceXs: {
    type: Number,
    required: true
  },
  colourId: {
    type: Schema.Types.ObjectId,
    ref: "colours",
    required: true,
  },
  materialId: {
    type: Schema.Types.ObjectId,
    ref: "materials",
    required: true,
  },
  patternId: {
    type: Schema.Types.ObjectId,
    ref: "stepcards",
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('producttemplates', createProductSchema);