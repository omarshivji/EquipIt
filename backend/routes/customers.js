const express = require('express');
const router = express.Router();
const { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customers');
const { logRequest } = require('../middleware/logger');

// Routes for the customers endpoint
router.get('/', logRequest, getAllCustomers);
router.get('/:customers_id', logRequest, getCustomerById);
router.post('/', logRequest, createCustomer);
router.put('/:customers_id', logRequest, updateCustomer);
router.delete('/:customers_id', logRequest, deleteCustomer);

module.exports = router;
