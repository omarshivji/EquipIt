const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const port = '8000';

const app = express();
app.use(bodyParser.json());

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'equipit123',
  port: '3306',
  database: 'equipit'
});

// curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"johndoe@example.com", "address":"123 Main St", "phone":"555-1234"}' http://localhost:8000/customers
// curl http://localhost:8000/customers/1
// curl -X DELETE http://localhost:8000/customers/1


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
  const customerId = req.params.customers_id;
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
  const customerId = req.params.customers_id;
  const updatedCustomer = req.body;
  connection.query('UPDATE customers SET ? WHERE customers_id = ?', [updatedCustomer, customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// DELETE /customers/{id}: Delete a customer from the database by their ID.
app.delete('/customers/:customers_id', (req, res) => {
  const customerId = req.params.customers_id;
  connection.query('DELETE FROM customers WHERE customers_id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /orders: Retrieve a list of all orders in the database.
app.get('/orders', (req, res) => {
  connection.query('SELECT * FROM orders', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /orders/{id}: Retrieve a specific order by its ID.
app.get('/orders/:order_id', (req, res) => {
  const orderId = req.params.order_id;
  connection.query('SELECT * FROM orders WHERE order_id = ?', [orderId], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// POST /orders: Create a new order in the database.
app.post('/orders', (req, res) => {
  const newOrder = req.body;
  connection.query('INSERT INTO orders SET ?', newOrder, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// PUT /orders/{id}: Update an existing order by its ID.
app.put('/orders/:order_id', (req, res) => {
  const orderId = req.params.order_id;
  const updatedOrder = req.body;
connection.query('UPDATE orders SET ? WHERE order_id = ?', [updatedOrder, orderId], (error, results, fields) => {
if (error) throw error;
res.send(results);
});
});

// DELETE /orders/{id}: Delete an order from the database by its ID.
app.delete('/orders/:order_id', (req, res) => {
const orderId = req.params.order_id;
connection.query('DELETE FROM orders WHERE order_id = ?', [orderId], (error, results, fields) => {
if (error) throw error;
res.send(results);
});
});

// GET /products: Retrieve a list of all products in the database.
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /products/{id}: Retrieve a specific product by its ID.
app.get('/products/:product_id', (req, res) => {
  const productId = req.params.product_id;
  const sql = 'SELECT * FROM products WHERE product_id = ?';
  connection.query(sql, [productId], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


// POST /products: Create a new product in the database.
app.post('/products', (req, res) => {
  const { store_store_id, name, description, price, quantity } = req.body;
  // Insert new product into MySQL database
  const sql = 'INSERT INTO products (store_store_id, name, description, price, quantity) VALUES (?, ?, ?, ?, ?)';
  const values = [store_store_id, name, description, price, quantity];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating product' });
    } else {
      res.json({ product_id: result.insertId, store_store_id, name, description, price, quantity });
    }
  });
});

// PUT /products/{id}: Update an existing product by its ID.
app.put('/products/:product_id', function(req, res) {
  const productId = req.params.product_id;
  const { store_store_id, name, description, price, quantity } = req.body;
  const query = `UPDATE products SET store_store_id =?, name=?, description=?, price=?, quantity=? WHERE product_id=?`;
  connection.query(query, [store_store_id, name, description, price, quantity, productId], function(error, results, fields) {
    if (error) throw error;
    res.status(200).send(`Product ${productId} updated successfully`);
  });
});

// DELETE /products/{id}: Delete a product from the database by its ID.
app.delete('/products/:product_id', (req, res) => {
  const productId = req.params.product_id;
  connection.query('DELETE FROM products WHERE product_id = ?', [productId], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error deleting product from database.');
    } else {
      console.log(`Deleted product with ID ${productId} from database.`);
      res.sendStatus(204); 
    }
  });
});

// GET /delivery_drivers: Retrieve a list of all delivery drivers in the database.
app.get('/delivery_drivers', (req, res) => {
  connection.query('SELECT * FROM delivery_drivers', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving delivery drivers' });
    } else {
      res.json(results);
    }
  });
});

// GET /delivery_drivers/{id}: Retrieve a specific delivery driver by their ID.
app.get('/delivery_drivers:driver_id', (req, res) => {
  const driverId = req.params.driver_id;
  const query = 'SELECT * FROM delivery_drivers WHERE id = ?';
  connection.query(query, [driverId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        // Return a 404 Not Found error if no driver was found
        res.status(404).json({ error: 'Driver not found' });
      }
    }
  });
});

// POST /delivery_drivers: Create a new delivery driver in the database.
app.post('/delivery_drivers', (req, res) => {
  const { name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password } = req.body;
  const sql = 'INSERT INTO delivery_drivers SET ?';
  const newDriver = { name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password };
  connection.query(sql, newDriver, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new delivery driver');
    } else {
      console.log(result);
      res.status(201).send('New delivery driver created!');
    }
  });
});

//PUT /delivery_drivers/{id}: Update an existing delivery driver by their ID.
app.put('/delivery_drivers/:driver_id', (req, res) => {
  const driverId = req.params.driver_id;
  const { name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password } = req.body;
  const query = `
      UPDATE delivery_drivers
      SET name = ?, email = ?, phone = ?, vehicle_make = ?, vehicle_model = ?, vehicle_color = ?, DOB = ?, password = ?
      WHERE driver_id = ?
  `;
  connection.query(query, [name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password, driverId], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error updating delivery driver');
      } else if (results.affectedRows === 0) {
          res.status(404).send('Delivery driver not found');
      } else {
          res.send('Delivery driver updated successfully');
      }
  });
});

// DELETE /delivery_drivers/{id}: Delete a delivery driver from the database by their ID.
app.delete('/delivery_drivers/:driver_id', function (req, res) {
  const driverId = req.params.driver_id;
  connection.query('DELETE FROM delivery_drivers WHERE driver_id = ?', [driverId], function (error, results, fields) {
    if (error) throw error;
    res.send('Delivery driver deleted successfully');
  });
});


// GET /delivery_records: Retrieve a list of all delivery records in the database.
app.get('/delivery_records', (req, res) => {
  const sql = 'SELECT * FROM delivery_records';
  connection.query(sql, (error, results) => {
      if (error) throw error;
      res.send(results);
  });
});

// GET /delivery_records/{id}: Retrieve a specific delivery record by its ID.
app.get('/delivery_records/:delivery_id', (req, res) => {
  const deliveryId = req.params.delivery_id;
  const query = `SELECT * FROM delivery_records WHERE delivery_id = ${deliveryId}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error retrieving delivery record:', error);
      res.status(500).send('Error retrieving delivery record');
    } else if (results.length === 0) {
      res.status(404).send('Delivery record not found');
    } else {
      res.json(results[0]);
    }
  });
});

// POST /delivery_records: Create a new delivery record in the database.
app.post('/delivery_records', (req, res) => {
  const { order_id, driver_id, delivery_date, customer_id, delivery_address } = req.body; // assuming request body contains order_id, driver_id and delivery_date
  const query = 'INSERT INTO delivery_records (order_id, driver_id, delivery_date) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [order_id, driver_id, delivery_date, customer_id, delivery_address], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error creating delivery record');
    } else {
      res.send(`Delivery record with ID ${results.insertId} created`);
    }
  });
});

// PUT /delivery_records/{id}: Update an existing delivery record by its ID.
app.put('/delivery_records/:delivery_id', (req, res) => {
  const deliveryId = req.params.delivery_id;
  const { order_id, driver_id, delivery_date, customer_id, delivery_address } = req.body;
  const query = `UPDATE delivery_records SET order_id = ?, driver_id = ?, delivery_date = ?, customer_id = ?, delivery_address = ? WHERE delivery_id = ?`;

  connection.query(query, [order_id, driver_id, delivery_date, customer_id, delivery_address, deliveryId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error updating delivery record');
    } else {
      res.status(200).send(`Delivery record with ID ${deliveryId} updated successfully`);
    }
  });
});

// DELETE /delivery_records/{id}: Delete a delivery record from the database by its ID.
app.delete('/delivery_records/:delivery_id', (req, res) => {
  const deliveryId = req.params.delivery_id;
  const sql = 'DELETE FROM delivery_records WHERE delivery_id = ?';
  connection.query(sql, [deliveryId], (error, results, fields) => {
    if (error) throw error;
    res.send(`Delivery record with ID ${deliveryId} has been deleted.`);
  });
});

// GET /payment_transactions: Retrieve a list of all payment transactions in the database.
app.get('/payment_transactions', (req, res) => {
  const query = 'SELECT * FROM payment_transactions';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// GET /payment_transactions/{id}: Retrieve a specific payment transaction by its ID.
app.get('/payment_transactions/:transaction_id', function(req, res) {
  const transaction_id = req.params.transaction_id;
  const query = 'SELECT * FROM payment_transactions WHERE transaction_id = ?';

  connection.query(query, [transaction_id], function(error, results) {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else if (results.length === 0) {
      res.status(404).send('Payment transaction not found');
    } else {
      res.json(results[0]);
    }
  });
});

//POST /payment_transactions: Create a new payment transaction in the database.
app.post('/payment_transactions', (req, res) => {
  const { transaction_id, orders_idx, amount, payment_date, customer_idx } = req.body;
  connection.query(
    'INSERT INTO payment_transactions (transaction_id, orders_idx, amount, payment_date, customer_idx) VALUES (?, ?, ?, ?, ?)',
    [transaction_id, orders_idx, amount, payment_date, customer_idx],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Payment transaction created successfully' });
      }
    }
  );
});

//PUT /payment_transactions/{id}: Update an existing payment transaction by its ID.
app.put('/payment_transactions/:transaction_id', (req, res) => {
  const transactionId = req.params.transaction_id;
  const updatedTransaction = req.body;
  if (!updatedTransaction.orders_idx || !updatedTransaction.amount || !updatedTransaction.payment_date || !updatedTransaction.customer_idx) {
    return res.status(400).json({ error: 'orders_idx, amount, payment_date, and customer_idx are required fields' });
  }
  const query = `UPDATE payment_transactions SET orders_idx = ?, amount = ?, payment_date = ?, customer_idx = ? WHERE transaction_id = ?`;
  const values = [updatedTransaction.orders_idx, updatedTransaction.amount, updatedTransaction.payment_date, updatedTransaction.customer_idx, transactionId];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update payment transaction' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Payment transaction not found' });
    }
    res.json({ message: 'Payment transaction updated successfully' });
  });
});

// DELETE /payment_transactions/{id}: Delete a payment transaction from the database by its ID.
app.delete('/payment_transactions/:transaction_id', (req, res) => {
  const transactionId = req.params.transaction_id;
  const sql = 'DELETE FROM payment_transactions WHERE transaction_id = ?';
  connection.query(sql, [transactionId], (error, results, fields) => {
    if (error) {
      console.error('An error occurred while deleting the payment transaction:', error);
      res.status(500).send('An error occurred while deleting the payment transaction.');
      return;
    }
    console.log(`Deleted payment transaction with ID ${transactionId}.`);
    res.sendStatus(204);
  });
});

// GET /store: Retrieve a list of all stores in the database.
app.get('/store', (req, res) => {
  connection.query('SELECT * FROM store', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// GET /store/{id}: Retrieve a specific store its ID.
app.get('/store/:store_id', (req, res) => {
  const store_id = req.params.store_id;
  const sql = `SELECT * FROM store WHERE store_id = ?`;
  connection.query(sql, [store_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error retrieving store from database.' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'Store not found.' });
      } else {
        const store = results[0];
        res.json(store);
      }
    }
  });
});

// POST /store: Create a new store in the database.
app.post('/store', (req, res) => {
  const { store_id, name, location, admin_id } = req.body;
  const values = [store_id ,name, location, admin_id];
  connection.query('INSERT INTO store (store_id, name, location, admin_id]) VALUES (?, ?, ? )', values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new store');
    } else {
      res.status(200).send(`New store with ID ${results.insertId} created successfully`);
    }
  });
});

// PUT /store/{id}: Update an existing store by its ID.
app.put('/store/:store_id', (req, res) => {
  const id = req.params.store_id;
  const newStore = req.body;

  connection.query(
    'UPDATE store SET ? WHERE store_id = ?',
    [newStore, id],
    (error, results, fields) => {
      if (error) throw error;

      res.send('Store updated successfully.');
    }
  );
});

// DELETE /store/{id}: Delete a store from the database by its ID.
app.delete('/store/:store_id', (req, res) => {
  const storeId = req.params.store_id;

  const query = 'DELETE FROM store WHERE store_id = ?';
  connection.query(query, [storeId], (error, result) => {
    if (error) {
      res.status(500).send({ error: 'Failed to delete store.' });
    } else if (result.affectedRows === 0) {
      res.status(404).send({ error: 'Store not found.' });
    } else {
      res.status(204).send();
    }
  });
});




// start the server
app.listen(8000, () => {
console.log('Server started on port 8000');
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
/*
// handle app termination server.close(() => {
console.log('Server closed.');
connection.end(err => {
if (err) console.error(err);
console.log('MySQL connection closed.');
process.exit();
*/
process.on('SIGINT', function() {process.exit()});

