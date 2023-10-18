const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const affairsRoute = require('./router/affairsRoutes');
// const ejs = require('ejs');

const newsRoutes = require('./router/newsRoutes');
const pdfRoutes = require('./router/pdfRoutes');
const adminRoutes = require('./router/adminRoutes');
const userRoutes = require('./router/userRoutes');
const paymentRoutes = require('./router/paymentRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const compression = require("compression")


const cors = require('cors');


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// Development Logging || Global Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware
// app.use(cookieParser());
app.use(cookieParser('secret'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Security Middleware
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

app.use(mongoSanitize());
app.use(xss());

app.use(compression())

// Rate Limiting
const limiter = rateLimit({
  max: 300,
  windowMS: 60 * 20 * 1000,
  message: 'Too many requests from this IP address, Please try again after 20 minutes!'
});
app.use('/api', limiter);

// CORS Setup

app.use(cors({ credentials: true, origin: true, withCredentials: true }));



app.use('/api/currentaffairs', affairsRoute);
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payment',paymentRoutes);

// Error Handling
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
