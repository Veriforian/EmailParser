const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Error Utils
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

//Routers
const emailRouter = require('./routes/emailRouter');

const app = express();

//App middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Controllers
app.use('/api/v1/emails', emailRouter);

// Catch 404 and forward to error handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

// Catches all errors and logs them in development
app.use(globalErrorHandler);

module.exports = app;
