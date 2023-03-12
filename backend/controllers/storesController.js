const storesModel = require('../models/storesModel');
const router = express.Router();

exports.getAllStores = (req, res) => {
  storesModel.getAllStores((err, stores) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving stores from database');
    } else {
      res.render('stores/index', { stores });
    }
  });
};

exports.getStoreById = (req, res) => {
  storesModel.getStoreById(req.params.id, (err, store) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving store from database');
    } else if (store.length === 0) {
      res.status(404).send('Store not found');
    } else {
      res.render('stores/show', { store });
    }
  });
};

exports.createStore = (req, res) => {
  const store = {
    name: req.body.name,
    location: req.body.location,
    admin_id: req.body.admin_id
  };
  storesModel.createStore(store, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new store');
    } else {
      res.status(201).send(`Store with ID: ${result.insertId} created`);
    }
  });
};

exports.updateStore = (req, res) => {
  const store = {
    name: req.body.name,
    location: req.body.location,
    admin_id: req.body.admin_id
  };
  storesModel.updateStore(req.params.id, store, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating store');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Store not found');
    } else {
      res.status(200).send(`Store with ID: ${req.params.id} updated`);
    }
  });
};

exports.deleteStore = (req, res) => {
  storesModel.deleteStore(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting store');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Store not found');
    } else {
      res.status(200).send(`Store with ID: ${req.params.id} deleted`);
    }
  });
};

module.exports = router;