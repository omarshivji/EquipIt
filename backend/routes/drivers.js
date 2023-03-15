const express = require('express');
const router = express.Router();
const { getDrivers, getDriverById, createDriver, updateDriver, deleteDriver } = require('../controllers/driversController');
const { logRequest } = require('../middleware/logger');


router.get('/', logRequest, getDrivers);
router.get('/:id', logRequest, getDriverById);
router.post('/', logRequest, createDriver);
router.put('/:id', logRequest, updateDriver);
router.delete('/:id', logRequest, deleteDriver);

module.exports = router;
