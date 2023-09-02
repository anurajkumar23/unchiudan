const mongoose = require('mongoose');
const { randomBytes, scrypt: _scrypt } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(_scrypt);

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please tell us your name!'] },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
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
  pdfid: [
    {
      type: String,
    },
  ],
  passwordChangedAt: Date,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = randomBytes(8).toString('hex');
  const hash = await scrypt(this.password, salt, 32);
  const result = salt + '.' + hash.toString('hex');
  this.password = result;
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

const User = mongoose.model('User', userSchema);
module.exports = User;
