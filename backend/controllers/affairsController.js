const CurrentAffairs = require('../models/currentAffairsSchema');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getAllAffairs = catchAsync(async (req, res, next) => {
    // Build query
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'limit', 'sort', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
  
    if (queryObj.category) {
      queryObj.category = {
        $regex: new RegExp(queryObj.category, 'i'), 
      };
    }
  
    let query = CurrentAffairs.find(queryObj).sort('-createdAt');
  
    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
  
    // Execute query
    const affairs = await query;
  
    res.status(200).json({
      status: 'success',
      results: affairs.length,
      data: {
        affairs,
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

exports.getAffair = catchAsync(async (req, res, next) => {
  const affairs = await CurrentAffairs.findById(req.params.id);
  if (!affairs) {
    return next(new AppError('No news found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      affairs,
    },
  });
});

exports.deleteAffair = catchAsync(async (req, res, next) => {
  const affairs = await CurrentAffairs.findByIdAndDelete(req.params.id);
  if (!affairs) {
    return next(new AppError('No news found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    affairs: null,
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const affairs = await CurrentAffairs.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );
  //   console.log(affairs);

  console.log(req.body);
  if (!affairs) {
    return next(new AppError('No doc found with that ID', 404));
  }

  if (req.file) {
    affairs.photo = req.file.filename;
  }
  res.status(200).json({
    status: 'success',
    data: {
      affairs,
    },
  });
});
