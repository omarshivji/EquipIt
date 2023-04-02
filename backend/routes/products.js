module.exports = (products) => {
const express = require('express');
const router = express.Router();
// const { products } = require('../models/productsModel.js');

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

// const db = require('../models/dbconnection');

router.post('/', async (req, res) => {
    //if(this.product === undefined) {return products}
    try {
      const { store_idx, name, description, price, quantity, product_image } = req.body;
      const product = await products.create({ store_idx, name, description, price, quantity, product_image });
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create product' });
    }
  });
  

// router.post('/', async (req, res) => {
//     if(this.product === undefined) {return}
//   try {
//     const product = await products.create(req.body);
//     res.json(product);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to create product' });
//   }
// });

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

return router; 
};