const express = require('express')
const db = require('mysql');
const connection = require('./dbconnection')

function getAllProducts (callback)  {
  const sql = 'SELECT * FROM products';
  connection.query(sql, callback);
};

function getProductById (id, callback)  {
  const sql = 'SELECT * FROM products WHERE product_id = ?';
  connection.query(sql, [id], callback);
};

function createProduct (product, callback)  {
  const sql = 'INSERT INTO products SET ?';
  connection.query(sql, [product], callback);
};

function updateProduct  (id, product, callback)  {
  const sql = 'UPDATE products SET ? WHERE product_id = ?';
  connection.query(sql, [product, id], callback);
};

function deleteProduct (id, callback)  {
  const sql = 'DELETE FROM products WHERE product_id = ?';
  connection.query(sql, [id], callback);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}
