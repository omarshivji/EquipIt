const express = require('express')
const connection = require('../models/dbconnection')
const mysql = require('mysql')
const router = express.Router();

function getAllStores  (req, res)  {
  connection.query('SELECT * FROM store', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};


function getStoreById (req, res) {
  const store_id = req.params.store_id;
  const sql = `SELECT * FROM store WHERE store_id = ?`;
  connection.query(sql, [store_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error retrieving store from database.' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'Store not found.' });
      } else {
        const store = results[0];
        res.json(store);
      }
    }
  });
}

function createStore (req, res) {
  const { store_id, name, location, admin_id } = req.body;
  const values = [store_id ,name, location, admin_id];
  connection.query('INSERT INTO store (store_id, name, location, admin_id]) VALUES (?, ?, ?, ? )', values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new store');
    } else {
      res.status(200).send(`New store with ID ${results.insertId} created successfully`);
    }
  });
}

function updateStore (req, res) {
  const id = req.params.store_id;
  const newStore = req.body;
  connection.query(
    [newStore, id],
    (error, results, fields) => {
      if (error) throw error;

      res.send('Store updated successfully.');
    }
  );
}

function deleteStore (req, res) {
  const storeId = req.params.store_id;
  const query = 'DELETE FROM store WHERE store_id = ?';
  connection.query(query, [storeId], (error, result) => {
    if (error) {
      res.status(500).send({ error: 'Failed to delete store.' });
    } else if (result.affectedRows === 0) {
      res.status(404).send({ error: 'Store not found.' });
    } else {
      res.status(204).send();
    }
  });
}

module.exports = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore
};