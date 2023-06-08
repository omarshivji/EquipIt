const { DataTypes } = require('sequelize');

// States that the customers table in the database will have the following columns
module.exports = (sequelize) => {
  const customers = sequelize.define("customers", {
    customers_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      timestamps: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseroadname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordConfirm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
return customers
};
