const mongoose = require('mongoose');

const currentAffairsSchema = new mongoose.Schema({
  topic: {
    type: String,
    set: (value) => value.toLowerCase(),
    required: true,
  },
  category: {
    type: String,
    enum: ['BiharDaroga', 'BPSC', 'Railway', 'UPSC', 'SSC'],
    required: true,
  },
  description: String,
  photo: {
    type: String,
    default: 'uchiudan.png'
  },
  data: [
    {
      ques: String,
      options: [
        {
          type: String,
          trim: true,
        },
      ],
      ans: {
        type: String,
        trim: true,
      },
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
    default: Date.now(),
  },
  updatedAt: Date,
});

const CurrentAffairs = mongoose.model('CurrentAffairs', currentAffairsSchema);

module.exports = CurrentAffairs;
