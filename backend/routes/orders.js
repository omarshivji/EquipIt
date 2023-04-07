module.exports = (orders) => {
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const listOrders = await orders.findAll();
    res.json(listOrders);
});

router.get('/:order_id', (req, res) => {
    const order_id = req.params.order_id;
    res.json(order_id);
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

return router;  
};