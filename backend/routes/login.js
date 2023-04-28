module.exports = (Login) => {
    const express = require('express');
    const router = express.Router();


    // Get all login
    router.get('/', async (req, res) => {
      const listLogin = await Login.findAll();
      res.json(listLogin);
    });
    
    // Get login by id
    router.get('/:login_id', (req, res) => {
      const login_id = req.params.login_id;
      res.json(login_id);
    })
    
    // Create a new login
    router.post('/', async (req, res) => {
      const login = req.body;
      await Login.create(login);
      res.json(login);
    });

    // Authenticates a login
    router.post('/authenticate', async (req, res) => {
      const { username, password } = req.body;
      
      try {
        const login = await Login.findOne({
          where: { username: username }
        });
        
        if (!login) {
          return res.status(401).send('Wrong username/password combination!');
        }
        
        if (password !== login.password) {
          return res.status(401).send('Wrong username/password combination!');
        }
    
        // if the login credentials match, send a success response
        res.status(200).send('Login successful!');
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    });
  
    // Update a login
    router.put('/:login_id', async (req, res) => {
      const login = req.body;
      await Login.update(login, {
        where: {
          login_id: req.params.login_id
        }
      });
      res.json(login);
    });
  
    // Delete a login
    router.delete('/:login_id', async (req, res) => {
      await Login.destroy({
        where: {
          login_id: req.params.login_id
        }
      });
      res.json('Login deleted');
    });

    
    
  
    return router;
  };
  