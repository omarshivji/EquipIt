const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  type: 'mysql',
  host: 'localhost',
  user: 'root',
  port: "3306",
  password: 'password',
  database: 'equipit',
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for customers
app.get('/customers', (req, res) => {
  const sql = 'SELECT * FROM customers';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error retrieving customers from database');
      return;
    }
    res.send(results);
  });
});

app.get('/customers/:id', (req, res) => {
  const sql = `SELECT * FROM customers WHERE customer_id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error retrieving customer from database');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Customer not found');
    } else {
      res.send(result);
    }
  });
});

app.post('/customers', (req, res) => {
  const sql = 'INSERT INTO customers SET ?';
  connection.query(sql, req.body, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error adding customer to database');
      return;
    }
    res.send('Customer added to database!');
  });
});

app.put('/customers/:id', (req, res) => {
  const sql = `UPDATE customers SET ? WHERE customer_id = ${req.params.id}`;
  connection.query(sql, req.body, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error updating customer in database');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Customer not found');
    } else {
      res.send('Customer updated in database!');
    }
  });
});

app.delete('/customers/:id', (req, res) => {
  const sql = `DELETE FROM customers WHERE customer_id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error deleting customer from database');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Customer not found');
    } else {
      res.send('Customer deleted from database!');
    }
  });
});

// Define routes for orders, products, delivery drivers, delivery records, and payment transactions (similar to routes for customers)

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Resource not found');
});

// Handle errors that occur during route processing
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('An error occurred while processing your request');
});

// Start the server
app.listen(port, () => {
console.log('EquipIt API listening at http://localhost:${port}');
});
