const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const affairsRoute = require('./router/affairsRoutes');
const ejs = require('ejs');

const newsRoutes = require('./router/newsRoutes');
const pdfRoutes = require('./router/pdfRoutes');
const adminRoutes = require('./router/adminRoutes');
const userRoutes = require('./router/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const paymentRoutes = require('./router/paymentRoutes');

const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

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

// Rate Limiting
// const limiter = rateLimit({
//   max: 200,
//   windowMS: 60 * 20 * 1000,
//   message: 'Too many requests from this IP address, Please try again after 20 minutes!'
// });
// app.use('/api', limiter);

// CORS Setup
app.use(cors({ credentials: true, origin: true, withCredentials: true }));

// Proxy Setup
// app.use('/api', createProxyMiddleware({
//   target: 'https://ucchi-urran-backend.vercel.app/api',
//   changeOrigin: true,
// }));

// Routes
// app.use('/images', express.static(__dirname ,'/public/img/affairs'));

// app.get('/api/currentaffairs/images/:imageName', async (req, res) => {
//   console.log("🚀🚀 ~ file: app.js:72 ~ app.get ~ filePath:", "here it start 😀😀😀😀😀😀😀")
//   console.log("🚀🚀 ~ file: app.js:72 ~ app.get ~ filePath:", req.params.imageName)
//   const filename = req.params.imageName;
//   const backendBaseUrl = 'https://ucchi-urran-backend.vercel.app/api';
//   const filePath = path.join(__dirname, '/public/img/affairs/', filename);
//   const backendUrl =`${backendBaseUrl}${filePath}`;
//   console.log("🚀🚀 ~ file: app.js:72 ~ app.get ~ filePath:", backendUrl)

//   const exists = await fs.promises.access(backendUrl)
//     .then(() => true)
//     .catch(() => false);

//   if (!exists) {
//     return res.status(404).send('Image not found');
//   }

//   res.sendFile(filePath);
// });

// app.get('/api/news/images/:imageName', async (req, res) => {
//   const filename = req.params.imageName;
//   const filePath = path.join(__dirname, '../public/img/news/', filename);

//   const exists = await fs.promises.access(filePath)
//     .then(() => true)
//     .catch(() => false);

//   if (!exists) {
//     return res.status(404).send('Image not found');
//   }

//   res.sendFile(filePath);
// });

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
