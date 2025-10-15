const { DataTypes } = require('sequelize');
const sequelize = require('../configs/databse');

const Rectangle = sequelize.define('Rectangle', {
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    perimeter: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'table_rec',
    timestamps: false
});

module.exports = Rectangle;