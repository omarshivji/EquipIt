const express = require('express');
const connection = require('../models/dbconnection');
const mysql = require('mysql')


// Controller function to retrieve a list of all customers
function getAllCustomers(req, res) {
  connection.query('SELECT * FROM customers', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

// Controller function to retrieve a specific customer by their ID
function getCustomerById(req, res) {
  const customerId = req.params.customers_id;
  connection.query('SELECT * FROM customers WHERE customers_id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
}

// Controller function to create a new customer
function createCustomer(req, res) {
  const { name, email, address, phone, DOB, password } = req.body;
  const sql = "INSERT INTO customers (name, email, address, phone, DOB, password) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [name, email, address, phone, DOB, password];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating customer' });
    } else {
      res.json({ customers_id: result.insertId, name, email, address, phone, DOB, password });
    }
  });
}

// Controller function to update an existing customer
function updateCustomer(req, res) {
  const customerId = req.params.customers_id;
  const updatedCustomer = req.body;
  connection.query('UPDATE customers SET ? WHERE customers_id = ?', [updatedCustomer, customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

// Controller function to delete a customer by their ID
function deleteCustomer(req, res) {
  const customerId = req.params.customers_id;
  connection.query('DELETE FROM customers WHERE customers_id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
