module.exports = (drivers) => {
const express = require('express');
const router = express.Router();
// const { drivers } = require('../models/driversModel');


// Get all drivers
router.get('/', async (req, res) => {
    const listDrivers = await drivers.findAll();
    res.json(listDrivers);
});

// Get drivers by id
router.get('/:driver_id', (req, res) => {
    const driver_id = req.params.driver_id;
    res.json(driver_id);
});

// Create a new drivers
router.post('/', async (req, res) => {
    const driver = req.body;
    await drivers.create(driver);
    res.json(driver);
});

// Update a driver
router.put('/:driver_id', async (req, res) => {
    const driver = req.body;
    await drivers.update(driver, {
        where: {
            driver_id: req.params.driver_id
        }
    });
    res.json(driver);
});

// Delete a driver
router.delete('/:driver_id', async (req, res) => {
    await drivers.destroy({
        where: {
            driver_id: req.params.driver_id
        }
    });
    res.json('Driver deleted');
});



return router;
};
