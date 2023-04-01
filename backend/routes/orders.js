const express = require('express');
const router = express.Router();
const { orders } = require('../models/ordersModel');
// const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/ordersController');
// const { logRequest } = require('../middleware/logger');

// router.get('/', logRequest, getAllOrders);
// router.get('/:order_id', logRequest, getOrderById);
// router.post('/', logRequest, createOrder);
// router.put('/:order_id', logRequest, updateOrder);
// router.delete('/:order_id', logRequest, deleteOrder);

// module.exports = router;

router.get('/', (req, res) => {
    res.json('Orders');
});

router.get('/:order_id', (req, res) => {
    res.json('Orders');
});

router.post('/', async (req, res) => {
    const order = req.body;
    await orders.create(order);
    res.json(order);
});

router.put('/:order_id', async (req, res) => {
    const order = req.body;
    await orders.update(order, {
        where: {
            order_id: req.params.order_id
        }
    });
    res.json(order);
});

router.delete('/:order_id', async (req, res) => {
    await orders.destroy({
        where: {
            order_id: req.params.order_id
        }
    });
    res.json('Order deleted');
});

module.exports = router;  