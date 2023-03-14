const express = require('express');
const mysql = require('mysql');
// const server = require('./server')

 // create a MySQL connection
const connection = mysql.createConnection({
  host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'equipit123',
  port: '3306',
  database: 'equipit'
});

module.exports = connection;