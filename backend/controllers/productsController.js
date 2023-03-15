const express = require('express')
const mysql = require('mysql');
const connection = require('../models/dbconnection')
const router = express.Router();

function getAllProducts (req, res) {
  const query = 'SELECT * FROM products';
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

function getProductById (req, res) {
  const productId = req.params.product_id;
  const sql = 'SELECT * FROM products WHERE product_id = ?';
  connection.query(sql, [productId], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}

function createProduct (req, res) {
const { store_idx, name, description, price, quantity } = req.body;
  // Insert new product into MySQL database
  const sql = 'INSERT INTO products (store_idx, name, description, price, quantity) VALUES (?, ?, ?, ?, ?)';
  const values = [store_idx, name, description, price, quantity];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating product' });
    } else {
      res.json({ product_id: result.insertId, store_idx, name, description, price, quantity });
    }
  });
}

function updateProduct (req, res){
   const productId = req.params.product_id;
  const { store_idx, name, description, price, quantity } = req.body;
  const query = `UPDATE products SET store_idx =?, name=?, description=?, price=?, quantity=? WHERE product_id=?`;
  connection.query(query, [store_idx, name, description, price, quantity, productId], function(error, results, fields) {
    if (error) throw error;
    res.status(200).send(`Product ${productId} updated successfully`);
  });
};

function deleteProduct (req, res){
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
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};