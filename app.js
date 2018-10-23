

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var mysql = require('mysql');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var patientrecordsRouter = require('./routes/patientrecords');
var assignPatientRouter = require('./routes/assignPatient');
var diagnosisRouter = require('./routes/diagnosis');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', 1) // trust first proxy
app.use(cors())
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2'],
//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))


// connection configurations
  app.use(function(req, res, next) {
    res.locals.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'hms'
    });
    res.locals.connection.connect(function(err){
      if(!err) {
          console.log("Database connection successful !!!");    
      } else {
        console.log("Database connection failure !!!");    
      }
      });
    next();
  });




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/assignPatient', assignPatientRouter);
app.use('/patientrecords', patientrecordsRouter);
app.use('/diagnosis', diagnosisRouter);



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

app.listen(4000);
