const express = require('express')
const mysql = require('mysql');
const connection = require('../models/dbconnection')

// Get all drivers from database
function getDrivers (req, res) {
  connection.query('SELECT * FROM delivery_drivers', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving delivery drivers' });
    } else {
      res.json(results);
    }
  });
}


// Get a driver by ID from database
function getDriverById (req, res){
  const driverId = req.params.driver_id;
  const query = 'SELECT * FROM delivery_drivers WHERE id = ?';
  connection.query(query, [driverId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        // Return a 404 Not Found error if no driver was found
        res.status(404).json({ error: 'Driver not found' });
      }
    }
  });
}

// Create a new driver in database
function createDriver (req, res) {
  const { name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password } = req.body;
  const sql = 'INSERT INTO delivery_drivers SET ?';
  const newDriver = { name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password };
  connection.query(sql, newDriver, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new delivery driver');
    } else {
      console.log(result);
      res.status(201).send('New delivery driver created!');
    }
  });
}

// Update a driver by ID in database
function updateDriver(req, res){
  const driverId = req.params.driver_id;
  const { name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password } = req.body;
  const query = `
      UPDATE delivery_drivers
      SET name = ?, email = ?, phone = ?, vehicle_make = ?, vehicle_model = ?, vehicle_color = ?, DOB = ?, password = ?
      WHERE driver_id = ?
  `;
  connection.query(query, [name, email, phone, vehicle_make, vehicle_model, vehicle_color, DOB, password, driverId], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error updating delivery driver');
      } else if (results.affectedRows === 0) {
          res.status(404).send('Delivery driver not found');
      } else {
          res.send('Delivery driver updated successfully');
      }
  });
}

// Delete a driver by ID from database
function deleteDriver(req, res) {
  const driverId = req.params.driver_id;
  connection.query('DELETE FROM delivery_drivers WHERE driver_id = ?', [driverId], function (error, results, fields) {
    if (error) throw error;
    res.send('Delivery driver deleted successfully');
  });
}

module.exports = {
  getDrivers,
  getDriverById,
  createDriver,
  updateDriver,
  deleteDriver
};
