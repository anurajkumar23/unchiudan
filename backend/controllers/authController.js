const jwt = require('jsonwebtoken');
const User = require('../models/userModal');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const { promisify } = require('util');
const Email = require('../utils/email');
const { createHash } = require('crypto');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
 
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    signed: true,
  };

  res.cookie('jwt', token, cookieOption);

  user.password = undefined;
 
  res.setHeader('Authorization', `Bearer ${token}`);
  
 


  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  });
 

  createSendToken(newUser, 201, req, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 0 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
 
  if (!email && !password) {
    return next(new AppError('please prove email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new AppError('User Not found'));
  }

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access', 401),
    );
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError('The user belgoning to this token does not exist.', 401),
    );
  }
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'The user recentely changed their password! please log in again.',
        401,
      ),
    );
  }

  req.user = currentUser;
  res.locals.user = currentUser;

  next();
});

exports.isLoggedIn = async (req, res, next) => {
  
  



  try {
   
    const token = req.headers.authorization
   
    
   
    if (!token) {
      return res.status(401).json({
        isAuthorized: false,
      });
    }


    // Verify token
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET, // This should match the secret used when signing the cookie
    );
    
    // Check if user exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({ message: 'User not found' });
    }
   

    // Check if password was changed
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({ message: 'Password changed' });
    }

    // User is authenticated, continue with the request
    res.status(200).json({
      user: currentUser,
      isAuthorized: true,
    });
  } catch (error) {

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
  
    
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403),
      );
    }
    
    next();
  };
};

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is Wrong', 401));
  }

  user.password = req.body.password;

  await user.save();

  createSendToken(user, 200, req, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  
  if (!user) {
    return next(
      new AppError('User does not exist with this Email address.', 404),
    );
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;



  try {
    await new Email(user, resetURL).sendPasswordReset();
    res.status(200).json({
      status: 'success',
      message: 'Token send to  email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        'There was an Error sending the email. Try again later .',
        500,
      ),
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has Expired', 400));
  }
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  createSendToken(user, 200, req, res);
});




exports.authenticateCors = async (req, res, next) => {

  
  
  try {
    // Check if token exists
    const token = req.headers.authorization
    // const token = req.headers.authorization;
    // const authtoken = token.split(" ")
    const tokenWithoutBearer = token.replace('Bearer ', '');
   
   
    if (!tokenWithoutBearer) {
      return res.status(401).json({
        isAuthorized: false,
      });
    }




    // Verify token
    const decoded = await promisify(jwt.verify)(
      tokenWithoutBearer,
      process.env.JWT_SECRET, // This should match the secret used when signing the cookie
    );
   
    // Check if user exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({ message: 'User not found' });
    }
    

    // Check if password was changed
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({ message: 'Password changed' });
    }

    

    // User is authenticated, continue with the request
    req.user = currentUser;
    
    res.locals.user = currentUser;
   
    
    next();
  } catch (error) {
  
    return res.status(500).json({ message: 'Internal Server Error 😀' });
  }
};