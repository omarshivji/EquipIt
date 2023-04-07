module.exports = (products) => {
const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    const listProducts = await products.findAll();
    res.json(listProducts);
});


router.get('/:product_id', (req, res) => {  
    const product_id = req.params.product_id;
    res.json(product_id);
});


router.post('/', async (req, res) => {
    try {
      const { store_name, name, description, price, quantity, product_image } = req.body;
      const product = await products.create({ store_name, name, description, price, quantity, product_image });
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create product' });
    }
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

return router; 
};