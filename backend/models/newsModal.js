const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
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
    default: 'uchiudan.png'
  }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;