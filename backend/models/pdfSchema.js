const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  photo: String,
  price: Number,
  description: String,
  Pdf: {
    type: String,
    required: true,
  },
  comments: [
    {
      user: String,
      email: String,
      data: String,
    },
  ],
  status: {
    type: String,
    enum: ['FREE', 'PAID'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date,
});

const PDF = mongoose.model('Product', pdfSchema);

module.exports = PDF;
