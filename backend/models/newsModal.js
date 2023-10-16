const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },

  article: {
    type: String,
    required: true
  },
  highlight: {
    type: Boolean,
    default: false
  },
  photo: {
    type: String,
    default: 'uchiudan.png',
  
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;