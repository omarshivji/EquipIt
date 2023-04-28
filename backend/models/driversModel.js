const { DataTypes } = require('sequelize');


// States that the drivers table in the database will have the following columns
module.exports = (sequelize) => {
    const drivers = sequelize.define("drivers", {
        driver_id: {
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
        vehicle_make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicle_model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicle_colour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DOB: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        });
    return drivers
    };
