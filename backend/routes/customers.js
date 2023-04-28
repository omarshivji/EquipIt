module.exports =  (customers) => {
const express = require('express');
const router = express.Router();

// Get all customers
router.get('/', async (req, res) => {
    const listCustomers = await customers.findAll();
    res.json(listCustomers);
    
});

// Get customers by id
router.get('/:customers_id', (req, res) => {
    const customers_id = req.params.customers_id;
    res.json(customers_id);
    
});

// Create a new customers
router.post('/', async (req, res) => {
    const customer = req.body;
    await customers.create(customer);
    res.json(customer);
});

// Update a customer
router.put('/:customers_id', async (req, res) => {
    const customer = req.body;
    await customers.update(customer, {
        where: {
            customers_id: req.params.customers_id
        }
    });
    res.json(customer);
});

// Delete a customer
router.delete('/:customers_id', async (req, res) => {
    await customers.destroy({
      where: {
        customers_id: req.params.customers_id
      }
    });
    res.json('Customer deleted');
  });
  
return router;
};
