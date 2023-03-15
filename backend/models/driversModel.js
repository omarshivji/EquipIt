const express = require('express')
const mysql = require('mysql');
const connection = require('./dbconnection')


// Get all drivers from database
function getDrivers (callback)  {
connection.query('SELECT * FROM delivery_drivers', callback);
};

// Get a driver by ID from database
function getDriverById (id, callback)  {
connection.query('SELECT * FROM delivery_drivers WHERE driver_id = ?', [id], callback);
};

// Create a new driver in database
function createDriver (driver, callback)  {
connection.query('INSERT INTO delivery_drivers SET ?', driver, callback);
};

// Update a driver in database
function updateDriver (id, driver, callback)  {
connection.query('UPDATE delivery_drivers SET ? WHERE driver_id = ?', [driver, id], callback);
};

// Delete a driver from database
function deleteDriver (id, callback)  {
connection.query('DELETE FROM delivery_drivers WHERE driver_id = ?', [id], callback);
};

module.exports = {
    getDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver
}