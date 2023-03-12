const productsModel = require('../models/productsModel');
const router = express.Router();

exports.getAllProducts = (req, res) => {
  productsModel.getAllProducts((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving products from database');
    } else {
      res.render('products/index', { products });
    }
  });
};

exports.getProductById = (req, res) => {
  productsModel.getProductById(req.params.id, (err, product) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving product from database');
    } else if (product.length === 0) {
      res.status(404).send('Product not found');
    } else {
      res.render('products/show', { product });
    }
  });
};

exports.createProduct = (req, res) => {
  const product = {
    store_id: req.body.store_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  };
  productsModel.createProduct(product, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new product');
    } else {
      res.status(201).send(`Product with ID: ${result.insertId} created`);
    }
  });
};

exports.updateProduct = (req, res) => {
  const product = {
    store_id: req.body.store_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  };
  productsModel.updateProduct(req.params.id, product, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating product');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(`Product with ID: ${req.params.id} updated`);
    }
  });
};

exports.deleteProduct = (req, res) => {
  productsModel.deleteProduct(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting product');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(`Product with ID: ${req.params.id} deleted`);
    }
    });
    };

module.exports = router;