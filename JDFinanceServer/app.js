var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var proxyRouter = require('./routes/proxy');
var homeHotProductRouter = require('./routes/homeHotProduct');
var homeFundRouter = require('./routes/homeFund');
var homeBoundRouter = require('./routes/homeBound');
var manageSliderRouter = require('./routes/manageSlider');
var manageWelfareRouter = require('./routes/manageWelfare');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 跨域设置请求头
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type, Accept")
  next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', proxyRouter);
app.use('/api/getHomeHotProduct',homeHotProductRouter);
app.use('/api/getHomeFund',homeFundRouter);
app.use('/api/getBound',homeBoundRouter);
app.use('/api/getManageSlider',manageSliderRouter);
app.use('/api/getWelfare',manageWelfareRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
