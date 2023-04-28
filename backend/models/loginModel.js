const { DataTypes } = require('sequelize');

// States that the login table in the database will have the following columns
module.exports = (sequelize) => {
    const login = sequelize.define("login", {
        login_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return login;
};