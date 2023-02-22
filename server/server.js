const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'equipit123',
  port: '3306'
});

// connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// GET /customers: Retrieve a list of all customers in the database.
app.get('/customers', (req, res) => {
  connection.query('SELECT * FROM customers', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /customers/{id}: Retrieve a specific customer by their ID.
app.get('/customers/:customers_id', (req, res) => {
  const customerId = req.params.id;
  connection.query('SELECT * FROM customers WHERE customers_id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// POST /customers: Create a new customer in the database.
app.post('/customers', (req, res) => {
  const newCustomer = req.body;
  connection.query('INSERT INTO customers SET ?', newCustomer, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// PUT /customers/{id}: Update an existing customer by their ID.
app.put('/customers/:customers_id', (req, res) => {
  const customerId = req.params.id;
  const updatedCustomer = req.body;
  connection.query('UPDATE customers SET ? WHERE customers_id = ?', [updatedCustomer, customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// DELETE /customers/{id}: Delete a customer from the database by their ID.
app.delete('/customers/:customers_id', (req, res) => {
  const customerId = req.params.id;
  connection.query('DELETE FROM customers WHERE id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /orders: Retrieve a list of all orders in the database.
app.get('/Orders', (req, res) => {
  connection.query('SELECT * FROM Orders', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /orders/{id}: Retrieve a specific order by its ID.
app.get('/Orders/:order_id', (req, res) => {
  const orderId = req.params.id;
  connection.query('SELECT * FROM Orders WHERE order_id = ?', [orderId], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// POST /orders: Create a new order in the database.
app.post('/Orders', (req, res) => {
  const newOrder = req.body;
  connection.query('INSERT INTO Orders SET ?', newOrder, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// PUT /orders/{id}: Update an existing order by its ID.
app.put('/Orders/:order_id', (req, res) => {
  const orderId = req.params.id;
  const updatedOrder = req.body;
connection.query('UPDATE Orders SET ? WHERE order_id = ?', [updatedOrder, orderId], (error, results, fields) => {
if (error) throw error;
res.send(results);
});
});

// DELETE /orders/{id}: Delete an order from the database by its ID.
app.delete('/orders/:order_id', (req, res) => {
const orderId = req.params.id;
connection.query('DELETE FROM Orders WHERE order_id = ?', [orderId], (error, results, fields) => {
if (error) throw error;
res.send(results);
});
});

// start the server
app.listen(3000, () => {
console.log('Server started on port 3000');
});

// close the MySQL connection when the app is terminated
process.on('SIGINT', () => {
connection.end(err => {
if (err) console.error(err);
console.log('MySQL connection closed.');
process.exit();
});
});

// handle uncaught exceptions
process.on('uncaughtException', err => {
console.error('Uncaught exception: ' + err);
process.exit(1);
});

// handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
console.error('Unhandled rejection at ' + promise + ', reason: ' + reason);
process.exit(1);
});

// handle app termination
server.close(() => {
console.log('Server closed.');
connection.end(err => {
if (err) console.error(err);
console.log('MySQL connection closed.');
process.exit();

process.on('SIGINT', function() {process.exit()});
});
});