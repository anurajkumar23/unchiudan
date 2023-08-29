const express = require('express');
const morgan = require('morgan');

const affairsRoute = require('./router/affairsRoutes');
const newsRoutes = require('./router/newsRoutes');
const pdfRoutes = require('./router/pdfRoutes');
const userRoutes = require('./router/userRoutes');

const app = express();

//DEVELOPMENT LOGGING

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// MIDDLEWARE
app.use(express.json());

// Routes

app.use('/api/current-affairs', affairsRoute);
app.use('/api/user', userRoutes);

module.exports = app;
