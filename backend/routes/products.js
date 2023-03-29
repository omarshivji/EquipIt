const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');
// const  } = require('../middleware/logger');

router.get('/', getAllProducts);
router.get('/:product_id', getProductById);
router.post('/', createProduct);
router.put('/:product_id', updateProduct);
router.delete('/:product_id', deleteProduct);

module.exports = router;
