module.exports =  (customers) => {
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const listCustomers = await customers.findAll();
    res.json(listCustomers);
    
});

router.get('/:customers_id', (req, res) => {
    const customers_id = req.params.customers_id;
    res.json(customers_id);
    
});

router.post('/', async (req, res) => {
    const customer = req.body;
    await customers.create(customer);
    res.json(customer);
});

router.put('/:customers_id', async (req, res) => {
    const customer = req.body;
    await customers.update(customer, {
        where: {
            customers_id: req.params.customers_id
        }
    });
    res.json(customer);
});

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
