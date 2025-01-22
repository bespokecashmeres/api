const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createProductSchema = new Schema({
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
    }
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