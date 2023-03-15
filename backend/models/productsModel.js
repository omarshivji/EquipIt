const express = require('express')
const db = require('mysql');
const connection = require('./dbconnection')

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
