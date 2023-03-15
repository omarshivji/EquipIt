const express = require('express');
const router = express.Router();
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/ordersController');
const { logRequest } = require('../middleware/logger');

router.get('/', logRequest, getAllOrders);
router.get('/:order_id', logRequest, getOrderById);
router.post('/', logRequest, createOrder);
router.put('/:order_id', logRequest, updateOrder);
router.delete('/:order_id', logRequest, deleteOrder);

module.exports = router;
