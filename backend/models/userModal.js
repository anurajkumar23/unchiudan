const mongoose = require('mongoose');
const { randomBytes, scrypt: _scrypt, createHash } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(_scrypt);

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please tell us your firstname!'],
  },
  lastname: { type: String, required: [true, 'Please tell us your lastname!'] },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  pdfs: [String],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = randomBytes(8).toString('hex');
  const hash = await scrypt(this.password, salt, 32);
  const result = salt + '.' + hash.toString('hex');
  this.password = result;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 10000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  const [salt, storedHash] = userPassword.split('.');
  const hash = await scrypt(candidatePassword, salt, 32);
  if (storedHash !== hash.toString('hex')) {
    return false;
  }
  return true;
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = randomBytes(32).toString('hex');
  this.passwordResetToken = createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
