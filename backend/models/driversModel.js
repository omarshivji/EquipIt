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
        driverfname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverlname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driveremail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverpassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverpasswordconfirm: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverphone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driveraddressline: {   
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverpostcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivercity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivercountry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverlicense: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverlicenseexpiry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        driverdob: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivervehicle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivervehiclemodel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivervehiclereg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivervehiclecolour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivervehiclemake: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drivervehicleyear: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    return drivers;
};


