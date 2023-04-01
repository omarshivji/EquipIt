const express = require('express');
const router = express.Router();
const { products } = require('../models/productsModel');

// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');
// // const  } = require('../middleware/logger');

// router.get('/', getAllProducts);
// router.get('/:product_id', getProductById);
// router.post('/', createProduct);
// router.put('/:product_id', updateProduct);
// router.delete('/:product_id', deleteProduct);

// module.exports = router;

router.get('/', (req, res) => {
    res.json('Products');
});

router.get('/:product_id', (req, res) => {  
    res.json('Products');
});

router.post('/', async (req, res) => {
    const product = req.body;
    await products.create(product);
    res.json(product);
});

router.put('/:product_id', async (req, res) => {
    const product = req.body;
    await products.update(product, {
        where: {
            product_id: req.params.product_id
        }
    });
    res.json(product);
});

router.delete('/:product_id', async (req, res) => {
    await products.destroy({
        where: {
            product_id: req.params.product_id
        }
    });
    res.json('Product deleted');
});

module.exports = router; 