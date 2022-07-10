const mongoose = require('mongoose');

//Simple Email schema based on mailparser email schema
const emailSchema = new mongoose.Schema({
  messageId: {
    type: String,
    required: true
  },
  to: {
    html: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  from: {
    html: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  date: {
    type: Date,
    required: true
  },
  subject: {
    type: String,
    require: true
  }
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
