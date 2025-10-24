const { Sequelize } = require('sequelize');
const config = require('../configs/database').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging
});

const Product = require('./productModel')(sequelize);

module.exports = {
    sequelize,
    Product
};
