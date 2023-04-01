// const mysql = require('mysql');
// const express = require('express');
// const connection = require('./dbconnection');
// const { sequelize } = require('.');
// const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define("customers", {
    customers_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      timestamps: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DOB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
return customers
};


  // function getAllCustomers(callback) {
  //   connection.query('SELECT * FROM customers', callback);
  // }

  // function getCustomerById(id, callback) {
  //   connection.query('SELECT * FROM customers WHERE customer_id = ?', [id], callback);
  // }

  // function createCustomer(customer, callback) {
  //   connection.query(
  //     'INSERT INTO customers (name, email, address, phone, DOB, password) VALUES (?, ?, ?, ?, ?, ?)',
  //     [customer.name, customer.email, customer.address, customer.phone, customer.DOB, customer.password],
  //     callback
  //   );
  // }

  // function updateCustomer(id, customer, callback) {
  //   connection.query(
  //     'UPDATE customers SET name = ?, email = ?, address = ?, phone = ?, DOB = ?, password = ? WHERE customer_id = ?',
  //     [customer.name, customer.email, customer.address, customer.phone, customer.DOB, customer.password, id],
  //     callback
  //   );
  // }

  // function deleteCustomer(id, callback) {
  //   connection.query('DELETE FROM customers WHERE customer_id = ?', [id], callback);
  // }

  // module.exports = {
  //   getAllCustomers,
  //   getCustomerById,
  //   createCustomer,
  //   updateCustomer,
  //   deleteCustomer
  // };