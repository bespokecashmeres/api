const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createProductSchema = new Schema({
  // ... existing code ...
  title: {
    type: Map,
    of: String,
    required: true
  },
  image: {
    type: String,
    required: true
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
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('producttemplates', createProductSchema);