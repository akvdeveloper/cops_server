const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
