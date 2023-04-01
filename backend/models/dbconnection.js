// const express = require('express');
// const mysql = require('mysql');
// // const server = require('./server')

//  // create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
//   user: 'admin',
//   password: 'equipit123',
//   port: '3306',
//   database: 'equipit'
// });

// connection.connect(err => {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database as id ' + connection.threadId);
// });


// module.exports = connection;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('equipit', 'admin', 'equipit123', {
  host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
