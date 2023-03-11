const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const indexRouter = require('./routes/index');
const customersRouter = require('./routes/customers');
const deliveryDriversRouter = require('./routes/delivery_drivers');
const deliveryRecordsRouter = require('./routes/delivery_records');
const ordersRouter = require('./routes/orders');
const paymentTransactionsRouter = require('./routes/payment_transactions');
const productsRouter = require('./routes/products');
const storeRouter = require('./routes/store');
const storeAdminRouter = require('./routes/store_admin');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// create a MySQL connection
const connection = mysql.createConnection({
    host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'equipit123',
    port: '3306',
    database: 'equipit'
  });

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// Routes
app.use('/', indexRouter);
app.use('/customers', customersRouter);
app.use('/delivery_drivers', deliveryDriversRouter);
app.use('/delivery_records', deliveryRecordsRouter);
app.use('/orders', ordersRouter);
app.use('/payment_transactions', paymentTransactionsRouter);
app.use('/products', productsRouter);
app.use('/store', storeRouter);
app.use('/store_admin', storeAdminRouter);

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
