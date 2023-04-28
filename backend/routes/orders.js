module.exports = (orders) => {
const express = require('express');
const router = express.Router();


// Get all orders
router.get('/', async (req, res) => {
    const listOrders = await orders.findAll();
    res.json(listOrders);
});


// Get orders by id
router.get('/:order_id', (req, res) => {
    const order_id = req.params.order_id;
    res.json(order_id);
});


// Create a new orders
router.post('/', async (req, res) => {
    const order = req.body;
    await orders.create(order);
    res.json(order);
});


// Update a order
router.put('/:order_id', async (req, res) => {
    const order = req.body;
    await orders.update(order, {
        where: {
            order_id: req.params.order_id
        }
    });
    res.json(order);
});


// Delete a order
router.delete('/:order_id', async (req, res) => {
    await orders.destroy({
        where: {
            order_id: req.params.order_id
        }
    });
    res.json('Order deleted');
});

return router;  
};