const fs = require('fs');
const path = require('path');
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
  let query1 = CurrentAffairs.find(queryObj);

  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 12;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  // Execute query
  const affairs = await query;
  const totaldata =await query1;

  res.status(200).json({
    status: 'success',
    results: affairs.length,
    totallength:totaldata.length,
    data: {
      affairs,
    },
  });
});

exports.lastestAffairs = catchAsync(async (req, res, next) => {
  const limit = req.query.limit * 1 || 4; // Set limit to 4 (or use the provided limit if available)

  const affairs = await CurrentAffairs.find().sort('-createdAt').limit(limit);

  res.status(200).json({
    status: 'success',
    data: {
      affairs,
    },
  });
});

exports.createAffairs = catchAsync(async (req, res, next) => {

  const parsedData = JSON.parse(req.body.data);
 
  
  let data = parsedData
  let photo;
  if (req.file) {
    photo = req.file.filename;
  }
  req.body = { ...req.body, photo ,data };
 

  const currentDate = Date.now();
  req.body.updatedAt = currentDate;

  const affairs = await CurrentAffairs.create(req.body);
 
  
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
  const affairs = await CurrentAffairs.findByIdAndRemove(req.params.id);
 
  if (!affairs) {
    return next(new AppError('No affairs found with that ID', 404));
  }
  const imagePath = affairs.photo;

  const fullPath = path.join(__dirname, '../public/img/affairs', imagePath);
  if (imagePath && imagePath !== 'uchiudan.png') {
    if (fs.existsSync(fullPath)) {
      // Delete the image file from the server's file system
      fs.unlinkSync(fullPath);
    } else {
      return new AppError('Photo is not deleted from server', 500);
    }
  }
  res.status(200).json({
    status: 'success',
    affairs: null,
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const parsedData = JSON.parse(req.body.data);
 
  
  let data = parsedData
  let photo;
  if (req.file) {
    photo = req.file.filename;
  }
  req.body = { ...req.body, photo ,data};

  // Set updatedAt to current date
  req.body.updatedAt = Date.now();

  const affairs = await CurrentAffairs.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!affairs) {
    return next(new AppError('No doc found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      affairs,
    },
  });
});

exports.showimage = catchAsync(async (req, res, next) => {
 

  const filename = req.params.imageName;
  const backendBaseUrl = 'https://ucchi-urran-backend.vercel.app/api';
  const filePath = path.join(__dirname, '../public/img/affairs/', filename);
  const backendUrl = `${backendBaseUrl}${filePath}`;

 

  

  const exists = await fs.promises.access(backendUrl)
  .then(() => true)
  .catch(() => false);

if (!exists) {
  return res.status(404).send('Image not found');
}

  res.sendFile(filePath);
});

exports.newest = catchAsync(async (req, res, next) => {
  try {
    const newestAffair = await CurrentAffairs.findOne()
      .sort({ date: -1 }); // Sort by date in descending order (newest first)

    if (!newestAffair) {
      return next(new AppError('No affairs found', 404));
    }

    const newestAffairId = newestAffair._id;
    res.json({ id: newestAffairId });
  } catch (err) {
    next(err);
  }
});
