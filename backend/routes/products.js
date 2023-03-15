const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');
const { logRequest } = require('../middleware/logger');

router.get('/', logRequest, getAllProducts);
router.get('/:product_id', logRequest, getProductById);
router.post('/', logRequest, createProduct);
router.put('/:product_id', logRequest, updateProduct);
router.delete('/:product_id', logRequest, deleteProduct);

module.exports = router;
