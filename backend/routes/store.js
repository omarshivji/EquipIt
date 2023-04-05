module.exports = (store) => {
const express = require('express');
const router = express.Router();
// const { store } = require('../models/storesModel');
// const { getAllStores, getStoreById, createStore, updateStore, deleteStore } = require('../controllers/storesController');
// const { logRequest } = require('../middleware/logger');

// router.get('/', logRequest, getAllStores);
// router.get('/:store_id', logRequest, getStoreById);
// router.post('/', logRequest, createStore);
// router.put('/:store_id', logRequest, updateStore);
// router.delete('/:store_id', logRequest, deleteStore);

// module.exports = router;

router.get('/', (req, res) => {
    res.json('Store');
});

router.get('/:store_id', (req, res) => {
    res.json('Store');
});

router.post('/', async (req, res) => {
    const stores = req.body;
    await store.create(stores);
    res.json(stores);
});

router.put('/:store_id', async (req, res) => {
    const stores = req.body;
    await store.update(stores, {
        where: {
            store_id: req.params.store_id
        }
    });
    res.json(stores);
});

router.delete('/:store_id', async (req, res) => {
    await store.destroy({
        where: {
            store_id: req.params.store_id
        }
    });
    res.json('Store deleted');
});

return router;
};