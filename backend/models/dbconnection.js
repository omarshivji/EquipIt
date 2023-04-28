const Sequelize = require('sequelize');

// Database connection to AWS RDS MySQL database
const sequelize = new Sequelize('equipit', 'admin', 'equipit123', {
  host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql'
});


// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
