const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/mysql.database");

const Log = sequelize.define(
    "Log",
    {
        logID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        printerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startPrintTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        endPrintTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        numberOfPages: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "print_log",
        timestamps: true, // Tự động quản lý createdAt và updatedAt
    }
);

module.exports = Log;
