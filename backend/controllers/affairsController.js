const CurrentAffairs = require('../models/currentAffairsSchema');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getAllAffairs = catchAsync(async (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    // Create a query to retrieve news articles with pagination
    const query = News.find().skip(skip).limit(limit);
    const affairs = await query;
    res.status(200).json({
      status: 'success',
      results: affairs.length,
      data: {
        affairs
      },
    });
  });

  exports.createAffairs = catchAsync(async (req, res, next) => {
    const affairs = await CurrentAffairs.create(req.body);
  
    if (req.file) {
      affairs.photo = req.file.filename;
    }
  
    res.status(201).json({
      status: 'success',
      data: {
        affairs,
      },
    });
  });