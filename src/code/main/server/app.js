var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var globals = require('./shared/globals');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, globals.publicDir + 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// NOTE: serves index.html by default under public directory
app.use(express.static(path.join(__dirname, globals.publicDir)));

// setup routes
require('./routes')(app);

module.exports = app;
