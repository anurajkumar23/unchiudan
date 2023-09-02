const fs = require('fs');
const path = require('path');
const PDF = require('../models/pdfSchema');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const multer = require('multer');
const sharp = require('sharp');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/pdf');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `pdf-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith('image') ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(
      new AppError('Unsupported file type. Please upload images or PDFs', 400),
      false,
    );
  }
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadPhotoAndPdf = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'pdf', maxCount: 1 },
]);

/////////////////////////////////////////////////////////////////////////////

exports.getAllPdf = catchAsync(async (req, res, next) => {
  // Build query
  const queryObj = { ...req.query };
  const excludedFields = ['page', 'limit', 'sort', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);

  if (queryObj.category) {
    queryObj.category = {
      $regex: new RegExp(queryObj.category, 'i'),
    };
  }

  let query = PDF.find(queryObj).sort('-createdAt');

  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  // Execute query
  const pdf = await query;

  res.status(200).json({
    status: 'success',
    results: pdf.length,
    data: {
      pdf,
    },
  });
});

exports.createPdf = catchAsync(async (req, res, next) => {
  const { photo, pdf, ...otherFields } = req.body;

  let photoFileName = 'uchiudan.png';
  if (req.files['photo'] && req.files['photo'][0]) {
    photoFileName = req.files['photo'][0].filename;
  }

  // Create the PDF record with the other fields
  const createdPdf = await PDF.create({
    ...otherFields,
    photo: photoFileName,
    pdf: req.files['pdf'][0].filename,
  });

  res.status(201).json({
    status: 'success',
    data: {
      pdf: createdPdf,
    },
  });
});

exports.getPdf = catchAsync(async (req, res, next) => {
  const pdf = await PDF.findById(req.params.id);
  if (!pdf) {
    return next(new AppError('No pdf found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      pdf,
    },
  });
});

exports.deletePdf = catchAsync(async (req, res, next) => {
  const pdf = await PDF.findByIdAndDelete(req.params.id).select('+pdf');
  if (!pdf) {
    return next(new AppError('No pdf found with that ID', 404));
  }

  const imagePath = pdf.photo;
  const pdfPath = pdf.pdf;
  console.log(pdfPath);
  console.log(imagePath);

  const imageFullPath = path.join(__dirname, '../public/img/pdf', imagePath);
  const pdfFullPath = path.join(__dirname, '../public/img/pdf', pdfPath);
  if (imagePath && imagePath !== 'uchiudan.png') {
    if (fs.existsSync(imageFullPath)) {
      fs.unlinkSync(imageFullPath);
    } else {
      return next(new AppError('Image is not deleted from server', 500));
    }
  }

  // Check if the PDF file exists and delete it
  if (fs.existsSync(pdfFullPath)) {
    fs.unlinkSync(pdfFullPath);
  } else {
    return next(new AppError('PDF is not deleted from server', 500));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  let photo;
  let pdf;
  if (req.files) {
    if (req.files.photo) {
      // 'photo' file was uploaded
      photo = req.files.photo[0].filename;
    }

    if (req.files.pdf) {
      // 'pdf' file was uploaded
      pdf = req.files.pdf[0].filename;
    }
  }
  req.body = { ...req.body, photo, pdf };
  const pdfs = await PDF.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!pdfs) {
    return next(new AppError('No pdf found with that ID', 404));
  }
  // Create the PDF record with the other fields
  res.status(200).json({
    status: 'success',
    data: {
      pdfs,
    },
  });
});

exports.download = catchAsync(async (req, res, next) => {
  const pdfId = req.params.id;
  const pdf = await PDF.findById(pdfId).select('+pdf');
  if (!pdf) {
    return next(new AppError('PDF data not found', 404));
  }
  const filename = pdf.pdf;
  const filePath = path.join(__dirname, '../public/img/pdf/', filename);

  const exists = await checkFileExists(filePath);

  if (!exists) {
    return next(new AppError('PDF file not found', 404));
  }

  if (pdf.status === 'free') {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Stream the file as the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    // Check if the user has paid for the PDF

    const userPaidFor = req.user.pdfid;
    const isPaid = userPaidFor.includes(pdfId);

    if (isPaid) {
      // If the user has paid, proceed with the download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filename}"`,
      );

      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      // If the user has not paid, redirect to a payment page with a message

      res.status(200).json({
        status: 'success',
        message: 'Redirect to payment gateway',
      });

      // return res.redirect('/payment-page?pdfId=' + pdfId);
    }
  }
});

// Helper function to check if a file exists
const checkFileExists = async (filePath) => {
  try {
    const stats = await fs.promises.stat(filePath);
    return stats.isFile();
  } catch (err) {
    return false;
  }
};
