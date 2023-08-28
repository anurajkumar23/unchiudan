const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  photo: String,
  price: Number,
  description: String,
  Month: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  Pdf: {
    type: String,
    required: true
  },
  comments: [
    {
      user: String,
      email: String,
      data: String
    }
  ],
  status: {
    type: String,
    enum: ['FREE', 'PAID'],
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});


const PDF = mongoose.model('Product', pdfSchema);

module.exports = PDF ;
