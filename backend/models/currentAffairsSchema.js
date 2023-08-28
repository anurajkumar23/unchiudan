const mongoose = require('mongoose');

const currentAffairsSchema = new mongoose.Schema({
  setno: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    category: ['Bihar Daroga', 'BPSC', 'Railway', 'UPSC', 'SSC.Bass'],
    required: true,
  },
  photo: String,
  data: [
    {
      ques: String,
      options: [String],
      ans: String,
    },
  ],
  comments: [
    {
      user: String,
      email: String,
      data: String,
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: Date,
});

const CurrentAffairs = mongoose.model('CurrentAffairs', currentAffairsSchema);

module.exports = CurrentAffairs;
