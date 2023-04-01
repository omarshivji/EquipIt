const express = require('express');
const router = express.Router();
const { stores } = require('../models/storesModel');
// const { getAllStores, getStoreById, createStore, updateStore, deleteStore } = require('../controllers/storesController');
// const { logRequest } = require('../middleware/logger');

// router.get('/', logRequest, getAllStores);
// router.get('/:store_id', logRequest, getStoreById);
// router.post('/', logRequest, createStore);
// router.put('/:store_id', logRequest, updateStore);
// router.delete('/:store_id', logRequest, deleteStore);

// module.exports = router;

router.get('/', (req, res) => {
    res.json('Stores');
});

router.get('/:store_id', (req, res) => {
    res.json('Stores');
});

router.post('/', async (req, res) => {
    const store = req.body;
    await stores.create(store);
    res.json(store);
});

router.put('/:store_id', async (req, res) => {
    const store = req.body;
    await stores.update(store, {
        where: {
            store_id: req.params.store_id
        }
    });
    res.json(store);
});

router.delete('/:store_id', async (req, res) => {
    await stores.destroy({
        where: {
            store_id: req.params.store_id
        }
    });
    res.json('Store deleted');
});

module.exports = router;