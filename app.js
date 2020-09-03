var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const stickers=require('./api/stickers');



var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//mount routes

app.use('/api/v1/stickers',stickers);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  res.status(err.status || 500);
  res.json({
    message:err.message,
    error:req.app.get('env') === 'development' ? err : {}
  })
});

module.exports = app;
