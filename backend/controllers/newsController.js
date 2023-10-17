const fs = require('fs');
const path = require('path');
const News = require('../models/newsModal');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {

  
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image. Please upload images', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadPhoto = upload.single('photo');

exports.resizePhoto = (path) => {
  
  
  return catchAsync(async (req, res, next) => {
   
    if (!req.file) return next();
    const folderName = path.split('/').pop();
    req.file.filename = `${folderName}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
      .resize(1200, 1600)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`${path}/${req.file.filename}`);
    next();
  });
};

exports.getAllNews = catchAsync(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  // Create a query to retrieve news articles with pagination
  const query = News.find().skip(skip).limit(limit).sort("-updatedAt");
  const query1 = News.find();
  const news = await query;
  const news2 = await query1;
  res.status(200).json({
    status: 'success',
    results: news.length,
    totallength:news2.length,
    data: {
      news,
    },
  });
});

exports.createOne = catchAsync(async (req, res, next) => {
 
  let photo;
  if (req.file) {
    photo = req.file.filename;
  }

  const currentDate = Date.now();
 
  req.body = { ...req.body, photo,updatedAt: currentDate };
  const news = await News.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      news,
    },
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  let photo;
  if (req.file) {
    photo = req.file.filename;
  }
  req.body = { ...req.body, photo };
  const news = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!news) {
    return next(new AppError('No doc found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      news,
    },
  });
});

exports.getNews = catchAsync(async (req, res, next) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    return next(new AppError('No news found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      news,
    },
  });
});

exports.deleteNews = catchAsync(async (req, res, next) => {
  const news = await News.findByIdAndRemove(req.params.id);

  if (!news) {
    return next(new AppError('No news found with that ID', 404));
  }

  const imagePath = news.photo;

  const fullPath = path.join(__dirname, '../public/img/news', imagePath);
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
    data: null,
  });
});

exports.autoDelete = catchAsync(async (req, res, next) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  ninetyDaysAgo.setHours(0, 0, 0, 0);

  const articlesToDelete = await News.find({
    createdAt: { $lt: ninetyDaysAgo },
  });
  for (const news of articlesToDelete) {
    const imagePath = news.photo;
    const fullPath = path.join(__dirname, '../public/img/news', imagePath);
    if (imagePath && imagePath !== 'uchiudan.png') {
      if (fs.existsSync(fullPath)) {
      
        fs.unlinkSync(fullPath);
      } else {
        return new AppError('Photo is not deleted from server', 500);
      }
    }
    await News.deleteOne({ _id: news._id });
  }
  res.status(200).json({
    status: 'success',
    message: 'News articles created more than 90 days ago have been deleted.',
  });
});
