const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  // States that the stores table in the database will have the following columns
  const store = sequelize.define("store", {
    store_id: {
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
   location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });
  return store;
};