const express = require('express')
const mysql = require('mysql');
const connection = require('./dbconnection')

function getAllOrders (callback)  {
  const query = 'SELECT * FROM orders';
  connection.query(query, callback);
};

function getOrderById (id, callback)  {
  const query = 'SELECT * FROM orders WHERE order_id = ?';
  connection.query(query, [id], callback);
};

function createOrder  (order, callback)  {
  const query = 'INSERT INTO orders SET ?';
  connection.query(query, order, callback);
};

function updateOrder  (id, order, callback)  {
  const query = 'UPDATE orders SET ? WHERE order_id = ?';
  connection.query(query, [order, id], callback);
};

function deleteOrder  (id, callback)  {
  const query = 'DELETE FROM orders WHERE order_id = ?';
  connection.query(query, [id], callback);
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
}

