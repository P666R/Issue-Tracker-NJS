const express = require('express');
const morgan = require('morgan');
const path = require('path');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const projectRouter = require('./routes/projectRoutes');
const issueRouter = require('./routes/issueRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/issues', issueRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl} on this route`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
