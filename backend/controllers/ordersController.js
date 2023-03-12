const ordersModel = require('../models/ordersModel.js');
const router = express.Router();

exports.getAllOrders = (req, res) => {
  ordersModel.getAllOrders((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving orders from database');
    } else {
      res.render('orders', { orders: result });
    }
  });
};

exports.getOrderById = (req, res) => {
  ordersModel.getOrderById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving order from database');
    } else if (result.length == 0) {
      res.status(404).send('Order not found');
    } else {
      res.render('order-details', { order: result[0] });
    }
  });
};

exports.createOrder = (req, res) => {
  const order = {
    customer_id: req.body.customer_id,
    store_id: req.body.store_id,
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    quantity: req.body.quantity,
    price: req.body.price,
    order_date: req.body.order_date
  };
  ordersModel.createOrder(order, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new order');
    } else {
      res.redirect('/orders');
    }
  });
};

exports.updateOrder = (req, res) => {
  const order = {
    customer_id: req.body.customer_id,
    store_id: req.body.store_id,
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    quantity: req.body.quantity,
    price: req.body.price,
    order_date: req.body.order_date
  };
  ordersModel.updateOrder(req.params.id, order, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating order');
    } else {
      res.redirect(`/orders/${req.params.id}`);
    }
  });
};

exports.deleteOrder = (req, res) => {
  ordersModel.deleteOrder(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting order');
    } else {
      res.redirect('/orders');
    }
  });
};

module.exports = router;