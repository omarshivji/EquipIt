const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
user: 'admin',
password: 'equipit123',
port: '3306',
database: 'equipit'
});

// Get all drivers from database
module.exports.getAllDrivers = (callback) => {
connection.query('SELECT * FROM delivery_drivers', callback);
};

// Get a driver by ID from database
module.exports.getDriverById = (id, callback) => {
connection.query('SELECT * FROM delivery_drivers WHERE driver_id = ?', [id], callback);
};

// Create a new driver in database
module.exports.createDriver = (driver, callback) => {
connection.query('INSERT INTO delivery_drivers SET ?', driver, callback);
};

// Update a driver in database
module.exports.updateDriver = (id, driver, callback) => {
connection.query('UPDATE delivery_drivers SET ? WHERE driver_id = ?', [driver, id], callback);
};

// Delete a driver from database
module.exports.deleteDriver = (id, callback) => {
connection.query('DELETE FROM delivery_drivers WHERE driver_id = ?', [id], callback);
};