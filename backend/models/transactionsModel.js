const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
    const transactions = sequelize.define("transactions", {
        transactions_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            timestamps: false,
        },
        payment_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        payment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        payment_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_receipt: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });
    return transactions;
};
       