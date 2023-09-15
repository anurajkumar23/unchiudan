const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const affairsRoute = require('./router/affairsRoutes');
const newsRoutes = require('./router/newsRoutes');
const pdfRoutes = require('./router/pdfRoutes');
const adminRoutes = require('./router/adminRoutes');
const userRoutes = require('./router/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');





const app = express();

//DEVELOPMENT LOGGING || Global Middleware
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
const limiter = rateLimit({
  max: 200,
  windowMS: 60 * 20 * 1000,
  message: 'Too many requests from this IP address, Please try again after 20 minutes!'
});
app.use('/api', limiter);


// Routes
app.use('/api/currentaffairs', affairsRoute);
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/admin',adminRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
