const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');

// Get all customers
router.get('/', customersController.getAllCustomers);

// Get a customer by ID
router.get('/:id', customersController.getCustomerById);

// Create a new customer
router.post('/', customersController.createCustomer);

// Update a customer by ID
router.put('/:id', customersController.updateCustomer);

// Delete a customer by ID
router.delete('/:id', customersController.deleteCustomer);

module.exports = router;
