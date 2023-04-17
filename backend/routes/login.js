module.exports = (Login) => {
    const express = require('express');
    const router = express.Router();
    const mysql = require('mysql');
    const sequelize = require('../models/dbconnection');
  
    router.get('/', async (req, res) => {
      const listLogin = await Login.findAll();
      res.json(listLogin);
    });
  
    router.get('/:login_id', (req, res) => {
      const login_id = req.params.login_id;
      res.json(login_id);
    });
  
    router.post('/', async (req, res) => {
      const login = req.body;
      await Login.create(login);
      res.json(login);
    });
  
    router.put('/:login_id', async (req, res) => {
      const login = req.body;
      await Login.update(login, {
        where: {
          login_id: req.params.login_id
        }
      });
      res.json(login);
    });
  
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
  