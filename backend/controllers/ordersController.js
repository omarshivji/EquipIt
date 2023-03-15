const express = require('express');
const connection = require('../models/dbconnection');
const mysql = require('mysql')

function getAllOrders(req, res) {
  connection.query('SELECT * FROM orders', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

function getOrderById (req, res){
  const orderId = req.params.order_id;
  connection.query('SELECT * FROM orders WHERE order_id = ?', [orderId], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
}

function createOrder  (req, res) {
  const newOrder = req.body;
  connection.query('INSERT INTO orders SET ?', newOrder, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

function updateOrder (req, res){
  const orderId = req.params.order_id;
  const updatedOrder = req.body;
connection.query('UPDATE orders SET ? WHERE order_id = ?', [updatedOrder, orderId], (error, results, fields) => {
if (error) throw error;
res.send(results);
});
}

function deleteOrder (req, res){
const orderId = req.params.order_id;
connection.query('DELETE FROM orders WHERE order_id = ?', [orderId], (error, results, fields) => {
if (error) throw error;
res.send(results);
});
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};