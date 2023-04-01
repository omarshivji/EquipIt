module.exports = (sequelize, DataTypes) => {
  const stores = sequelize.define("stores", {
    store_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      timestamps: false,
    },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });
  return stores;
};
    









// const express = require('express')
// const connection = require ('./dbconnection')
// const mysql = ('mysql')

// function getAllStores  (callback) {
//   const sql = 'SELECT * FROM store';
//   connection.query(sql, callback);
// };

// function getStoreById (id, callback) {
//   const sql = 'SELECT * FROM store WHERE store_id = ?';
//   connection.query(sql, [id], callback);
// };

// function createStore (store, callback) {
//   const sql = 'INSERT INTO store SET ?';
//   connection.query(sql, [store], callback);
// };

// function updateStore  (id, store, callback) {
//   const sql = 'UPDATE store SET ? WHERE store_id = ?';
//   connection.query(sql, [store, id], callback);
// };

// function deleteStore (id, callback) {
//   const sql = 'DELETE FROM store WHERE store_id = ?';
//   connection.query(sql, [id], callback);
// };

// module.exports = {
//   getAllStores,
//   getStoreById,
//   createStore,
//   updateStore,
//   deleteStore
// }
