const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driversController');

// Get all drivers
router.get('/', driversController.getAllDrivers);

// Get a driver by ID
router.get('/:id', driversController.getDriverById);

// Create a new driver
router.post('/', driversController.createDriver);

// Update a driver by ID
router.put('/:id', driversController.updateDriver);

// Delete a driver by ID
router.delete('/:id', driversController.deleteDriver);

module.exports = router;
