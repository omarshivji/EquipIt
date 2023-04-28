module.exports = (admin) => {
const express = require('express');
const router = express.Router();

// Get all admins 
router.get('/', async (req, res) => {
    const listAdmin = await admin.findAll();
    res.json(listAdmin);
}
);

// Get admin by id
router.get('/:admin_id', (req, res) => {
    const admin_id = req.params.admin_id;
    res.json(admin_id);
}
);

// Create a new admin
router.post('/', async (req, res) => {
  const admins = req.body;
  await admin.create(admins);
  res.json(admins);
});

// Authenticates a login
router.post('/authenticate', async (req, res) => {
    const { username, password } = req.body;
    
    try {
      const adminlogin = await admin.findOne({
        where: { username: username }
      });
      
      if (!adminlogin) {
        return res.status(401).send('Wrong username/password combination!');
      }
      
      if (password !== adminlogin.password) {
        return res.status(401).send('Wrong username/password combination!');
      }
  
      // if the login credentials match, send a success response
      res.status(200).send('Login successful!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// Update a admin
router.put('/:admin_id', async (req, res) => {
    const admins = req.body;
    await admin.update(admins, {
        where: {
            admin_id: req.params.admin_id
        }
    });
    res.json(admins);
}
);

// Delete a admin
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
