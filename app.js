const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const mainRouter = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRouter);

module.exports = app;
