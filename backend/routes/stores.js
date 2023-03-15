const express = require('express');
const router = express.Router();
const { getAllStores, getStoreById, createStore, updateStore, deleteStore } = require('../controllers/storesController');
const { logRequest } = require('../middleware/logger');

router.get('/', logRequest, getAllStores);
router.get('/:store_id', logRequest, getStoreById);
router.post('/', logRequest, createStore);
router.put('/:store_id', logRequest, updateStore);
router.delete('/:store_id', logRequest, deleteStore);

module.exports = router;
