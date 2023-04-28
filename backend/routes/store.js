module.exports = (store) => {
const express = require('express');
const router = express.Router();


// Get all stores
router.get('/', async (req, res) => {
    const listStores = await store.findAll();
    res.json(listStores);
});

// Get stores by id
router.get('/:store_id', (req, res) => {
    const store_id = req.params.store_id;
    res.json(store_id);
});

// Create a new stores
router.post('/', async (req, res) => {
    const stores = req.body;
    await store.create(stores);
    res.json(stores);
});

// Update a store
router.put('/:store_id', async (req, res) => {
    const stores = req.body;
    await store.update(stores, {
        where: {
            store_id: req.params.store_id
        }
    });
    res.json(stores);
});

// Delete a store
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