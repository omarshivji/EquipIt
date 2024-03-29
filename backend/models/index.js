'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// Database connection to AWS RDS MySQL database
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Test the connection to the database
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file !== 'dbconnection.js'
    );
  })

  // Importing and stating all the models 
  const customersModel = require('./customersModel.js')(sequelize, Sequelize.DataTypes);
  const driversModel = require('./driversModel.js')(sequelize, Sequelize.DataTypes);
  const ordersModel = require('./ordersModel.js')(sequelize, Sequelize.DataTypes);
  const productsModel = require('./productsModel.js')(sequelize, Sequelize.DataTypes);
  const storesModel = require('./storesModel.js')(sequelize, Sequelize.DataTypes);
  const transactionsModel = require('./transactionsModel.js')(sequelize, Sequelize.DataTypes);
  const adminModel = require('./adminModel.js')(sequelize, Sequelize.DataTypes);
  const loginModel = require('./loginModel.js')(sequelize, Sequelize.DataTypes);

  
  
  db[customersModel.name] = customersModel;
  db[driversModel.name] = driversModel;
  db[ordersModel.name] = ordersModel;
  db[productsModel.name] = productsModel;
  db[storesModel.name] = storesModel;
  db[transactionsModel.name] = transactionsModel;
  db[adminModel.name] = adminModel;
  db[loginModel.name] = loginModel;
  


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

