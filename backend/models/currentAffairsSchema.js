const mongoose = require('mongoose');

const currentAffairsSchema = new mongoose.Schema({
  setno: {
    type: Number,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  category: {
    type: String,
    category: ["Bihar Daroga", "BPSC", "Railway", "UPSC", "SSC.Bass"],
    required: true
  },
  photo: String,
  month: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  data: [
    {
      ques: String,
      options: [String],
      ans: String
    }
  ],
  comments: [
    {
      user: String,
      email: String,
      data: String
    }
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const CurrentAffairs = mongoose.model('CurrentAffairs', currentAffairsSchema);


module.exports = CurrentAffairs;
