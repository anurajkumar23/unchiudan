const path = require('path');
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

const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

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

// Rate Limiting
// const limiter = rateLimit({
//   max: 200,
//   windowMS: 60 * 20 * 1000,
//   message: 'Too many requests from this IP address, Please try again after 20 minutes!'
// });
// app.use('/api', limiter);

// CORS Setup
app.use(cors({credentials: true, origin: true, withCredentials: true }))

// Proxy Setup
// app.use('/api', createProxyMiddleware({
//   target: 'http://localhost:5173',
//   changeOrigin: true,
// }));

// Routes

app.use('/api/currentaffairs', affairsRoute);
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/admin', adminRoutes);

// Error Handling
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
