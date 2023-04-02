const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const products = sequelize.define("products", {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      timestamps: false,
    },
    store_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return products;
};








// const express = require('express')
// const db = require('mysql');
// const connection = require('./dbconnection')

// function getAllProducts (callback)  {
//   const sql = 'SELECT * FROM products';
//   connection.query(sql, callback);
// };

// function getProductById (id, callback)  {
//   const sql = 'SELECT * FROM products WHERE product_id = ?';
//   connection.query(sql, [id], callback);
// };

// function createProduct (product, callback)  {
//   const sql = 'INSERT INTO products SET ?';
//   connection.query(sql, [product], callback);
// };

// function updateProduct  (id, product, callback)  {
//   const sql = 'UPDATE products SET ? WHERE product_id = ?';
//   connection.query(sql, [product, id], callback);
// };

// function deleteProduct (id, callback)  {
//   const sql = 'DELETE FROM products WHERE product_id = ?';
//   connection.query(sql, [id], callback);
// };

// module.exports = {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct
// }
