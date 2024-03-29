const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  // States that the orders table in the database will have the following columns
  const orders = sequelize.define("orders", {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      timestamps: true,
    },
    customer_firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_housename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_postcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return orders;
};


















