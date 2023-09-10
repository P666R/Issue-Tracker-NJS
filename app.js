const express = require('express');
const morgan = require('morgan');
const path = require('path');

const projectRouter = require('./routes/projectRoutes');
const issueRouter = require('./routes/issueRoutes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/issues', issueRouter);

module.exports = app;
