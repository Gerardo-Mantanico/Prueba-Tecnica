const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');

const usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 18
        }
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = usuarios;