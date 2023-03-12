const db = require('../config/db');

exports.getAllStores = (callback) => {
  const sql = 'SELECT * FROM store';
  db.query(sql, callback);
};

exports.getStoreById = (id, callback) => {
  const sql = 'SELECT * FROM store WHERE store_id = ?';
  db.query(sql, [id], callback);
};

exports.createStore = (store, callback) => {
  const sql = 'INSERT INTO store SET ?';
  db.query(sql, [store], callback);
};

exports.updateStore = (id, store, callback) => {
  const sql = 'UPDATE store SET ? WHERE store_id = ?';
  db.query(sql, [store, id], callback);
};

exports.deleteStore = (id, callback) => {
  const sql = 'DELETE FROM store WHERE store_id = ?';
  db.query(sql, [id], callback);
};
