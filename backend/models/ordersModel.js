const express = require('express')
const mysql = require('mysql');
const connection = require('./dbconnection')

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

