const express = require('express');
const router = express.Router();
const { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customersController');

router.get('/', getAllCustomers);

router.get('/:customers_id', getCustomer);

router.post('/', createCustomer);

router.put('/:customers_id', updateCustomer);

router.delete('/:customers_id', deleteCustomer);

module.exports = router;
