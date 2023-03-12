const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
    host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'equipit123',
    port: '3306',
    database: 'equipit'
  });

function getAllCustomers(callback) {
  connection.query('SELECT * FROM customers', callback);
}

function getCustomerById(id, callback) {
  connection.query('SELECT * FROM customers WHERE customer_id = ?', [id], callback);
}

function createCustomer(customer, callback) {
  connection.query(
    'INSERT INTO customers (name, email, address, phone, DOB, password) VALUES (?, ?, ?, ?, ?, ?)',
    [customer.name, customer.email, customer.address, customer.phone, customer.DOB, customer.password],
    callback
  );
}

function updateCustomer(id, customer, callback) {
  connection.query(
    'UPDATE customers SET name = ?, email = ?, address = ?, phone = ?, DOB = ?, password = ? WHERE customer_id = ?',
    [customer.name, customer.email, customer.address, customer.phone, customer.DOB, customer.password, id],
    callback
  );
}

function deleteCustomer(id, callback) {
  connection.query('DELETE FROM customers WHERE customer_id = ?', [id], callback);
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
