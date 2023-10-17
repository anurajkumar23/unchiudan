const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModal');
const PDF = require('../models/pdfSchema');
const AppError = require('../utils/appError');


exports.getAllUser = catchAsync(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    return next(new AppError(error, 400));
  }
});


exports.getSingle = catchAsync(async (req, res) => {
    const { id } = req.params;
  try {
    const users = await User.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    return next(new AppError(error, 400));
  }
});


exports.getPdfs = catchAsync(async(req,res)=>{
  try {
    const users = await PDF.find();
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    return next(new AppError(error, 400));
  }
})

exports.deletePdf = catchAsync(async (req,res)=>{
  const { id } = req.params;

  
  try {
    await PDF.findByIdAndDelete(id);
    res.status(200).json({
      status: 'success'
    }); 
  } catch (error) {
      return next(new AppError(error, 400));
  }
}
)
exports.deleteUser = catchAsync(async (req,res)=>{
  const { id } = req.params;

  
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      status: 'success'
    }); 
  } catch (error) {
      return next(new AppError(error, 400));
  }
}
)