const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
    host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'equipit123',
    port: '3306',
    database: 'equipit'
  });

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to database');
  }
});

exports.getAllOrders = callback => {
  const query = 'SELECT * FROM orders';
  connection.query(query, callback);
};

exports.getOrderById = (id, callback) => {
  const query = 'SELECT * FROM orders WHERE order_id = ?';
  connection.query(query, [id], callback);
};

exports.createOrder = (order, callback) => {
  const query = 'INSERT INTO orders SET ?';
  connection.query(query, order, callback);
};

exports.updateOrder = (id, order, callback) => {
  const query = 'UPDATE orders SET ? WHERE order_id = ?';
  connection.query(query, [order, id], callback);
};

exports.deleteOrder = (id, callback) => {
  const query = 'DELETE FROM orders WHERE order_id = ?';
  connection.query(query, [id], callback);
};

