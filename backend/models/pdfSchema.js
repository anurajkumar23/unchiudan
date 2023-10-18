const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['BiharDaroga', 'BPSC', 'Railway', 'UPSC', 'SSC'],
    required: true,
  },
  photo: {
    type: String,
    default: 'uchiudan.png',
  },
  price: Number,
  description: String,
  pdf: {
    type: String,
    required: true,
    select: false,
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
    enum: ['free', 'paid'],
    required: true,
    default:"free"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date,
});

const PDF = mongoose.model('Pdfs', pdfSchema);

module.exports = PDF;
