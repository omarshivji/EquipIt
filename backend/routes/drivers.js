

const express = require('express');
const router = express.Router();

const { delivery_drivers } = require('../models/driversModel');


router.get('/', (req, res) => {
    res.json('Drivers');
});



router.get('/:driver_id', (req, res) => {
    res.json('drivers');
});


router.post('/', async (req, res) => {
    const delivery_drivers = req.body;
    await delivery_drivers.create(delivery_drivers);
    res.json(delivery_drivers);
});

router.put('/:driver_id', async (req, res) => {
    const delivery_drivers = req.body;
    await delivery_drivers.update(delivery_drivers, {
        where: {
            driver_id: req.params.driver_id
        }
    });
    res.json(delivery_drivers);
});

router.delete('/:driver_id', async (req, res) => {
    await delivery_drivers.destroy({
        where: {
            driver_id: req.params.driver_id
        }
    });
    res.json('Driver deleted');
});



module.exports = router;
