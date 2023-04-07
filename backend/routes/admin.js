module.exports = (admin) => {
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const listAdmin = await admin.findAll();
    res.json(listAdmin);
}
);

router.get('/:admin_id', (req, res) => {
    const admin_id = req.params.admin_id;
    res.json(admin_id);
}
);

router.post('/', async (req, res) => {
    const admin = req.body;
    await admin.create(admin);
    res.json(admin);
}
);

router.put('/:admin_id', async (req, res) => {
    const admin = req.body;
    await admin.update(admin, {
        where: {
            admin_id: req.params.admin_id
        }
    });
    res.json(admin);
}
);

router.delete('/:admin_id', async (req, res) => {
    await admin.destroy({
        where: {
            admin_id: req.params.admin_id
        }
    });
    res.json('Admin deleted');
});


return router;

};
