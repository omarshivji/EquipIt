module.exports = (drivers) => {
const express = require('express');
const router = express.Router();
// const { drivers } = require('../models/driversModel');


router.get('/', (req, res) => {
    res.json('Drivers');
});

router.get('/:driver_id', (req, res) => {
    res.json('drivers');
});

router.post('/', async (req, res) => {
    const driver = req.body;
    await drivers.create(driver);
    res.json(driver);
});

router.put('/:driver_id', async (req, res) => {
    const driver = req.body;
    await drivers.update(driver, {
        where: {
            driver_id: req.params.driver_id
        }
    });
    res.json(driver);
});

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
