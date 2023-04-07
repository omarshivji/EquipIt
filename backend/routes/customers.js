module.exports =  (customers) => {
const express = require('express');
const router = express.Router();
const sequelize = require('../models/dbconnection.js');
const mysql = require('mysql');
// const { customers } = require('../models/customersModel.js');

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
  

router.get('/', async (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    const customer = await customers.findOne({
        where: {
            username: username,
            password: password
        }
    });
    res.json(customer);
});

router.post('/' , async (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    sequelize.query('SELECT * FROM customers WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: 'Wrong username/password combination' });
            }
        }
    });
});



return router;
};
