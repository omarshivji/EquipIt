const express = require('express');
const connection = require('../models/dbconnection');
const mysql = require('mysql');
//const bcrypt = require('bcrypt'); 

//const saltRounds = 10; // Define the number of salt rounds for bcrypt


// Controller function to retrieve a list of all customers
async function getAllCustomers(req, res) {
  connection.query('SELECT * FROM customers', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

// Controller function to retrieve a specific customer by their ID
async function getCustomerById(req, res) {
  const customerId = req.params.customers_id;
  connection.query('SELECT * FROM customers WHERE customers_id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

async function createCustomer(req, res) {
  const { name, email, address, phone, DOB, password } = req.body;
 // const hashedPassword = await bcrypt.hash(password, saltRounds);
  const sql = "INSERT INTO customers (name, email, address, phone, DOB, password) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [name, email, address, phone, DOB, password];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating customer' });
    } else {
      res.json({ customers_id: result.insertId, name, email, address, phone, DOB });
    }
  });
}

// Controller function to update an existing customer
async function updateCustomer(req, res) {
  const customerId = req.params.customers_id;
  const updatedCustomer = req.body;
  const sql = 'UPDATE customers SET name = ?, address = ?, phone = ? WHERE customers_id = ?';
  const values = [updatedCustomer.name, updatedCustomer.address, updatedCustomer.phone, customerId];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating customer' });
    } else {
      res.json({ message: 'Customer updated successfully' });
    }
  });
}


// Controller function to delete a customer by their ID
async function deleteCustomer(req, res) {
  const customerId = req.params.customers_id;
  connection.query('DELETE FROM customers WHERE customers_id = ?', [customerId], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

// // New controller function to handle the login
// async function login(req, res) {
//   const { email, password } = req.body;

//   connection.query('SELECT * FROM customers WHERE email = ?', [email], async (error, results, fields) => {
//     if (error) throw error;

//     const customer = results[0];
//     if (!customer) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, customer.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     // If the email and password are valid, generate a token or session for the customer
//     // You can use JWT, cookies, or any other method you prefer for managing authentication
//     const token = generateAuthToken(customer);

//     // Send the token back to the client
//     res.json({ token });
//   });
// }


module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  //login
};
