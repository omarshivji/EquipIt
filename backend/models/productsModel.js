const db = require('mysql');

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

exports.getAllProducts = (callback) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, callback);
};

exports.getProductById = (id, callback) => {
  const sql = 'SELECT * FROM products WHERE product_id = ?';
  db.query(sql, [id], callback);
};

exports.createProduct = (product, callback) => {
  const sql = 'INSERT INTO products SET ?';
  db.query(sql, [product], callback);
};

exports.updateProduct = (id, product, callback) => {
  const sql = 'UPDATE products SET ? WHERE product_id = ?';
  db.query(sql, [product, id], callback);
};

exports.deleteProduct = (id, callback) => {
  const sql = 'DELETE FROM products WHERE product_id = ?';
  db.query(sql, [id], callback);
};
