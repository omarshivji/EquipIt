const express = require('express');
const router = express.Router();

const customersModel = require('../models/customersModel');

// Get all customers
router.get('/', (req, res) => {
  customersModel.getAllCustomers((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving customers from database');
    } else {
      res.send(result);
    }
  });
});

// Get a customer by ID
router.get('/:id', (req, res) => {
  customersModel.getCustomerById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving customer from database');
    } else if (result.length == 0) {
      res.status(404).send('Customer not found');
    } else {
      res.send(result[0]);
    }
  });
});

// Create a new customer
router.post('/', (req, res) => {
  const customer = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    DOB: req.body.DOB,
    password: req.body.password
  };
  customersModel.createCustomer(customer, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new customer');
    } else {
      res.status(201).send(`Customer with ID: ${result.insertId} created`);
    }
  });
});

// Update a customer by ID
router.put('/:id', (req, res) => {
  const customer = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    DOB: req.body.DOB,
    password: req.body.password
  };
  customersModel.updateCustomer(req.params.id, customer, (err, result) => {
    if (err) {
