const db = require('../configs/database');

const Product = {
    getAllProducts: (callback) => {
        db.query('SELECT * FROM products', (err, result) => {
            if (err) throw err;

            return callback(null, result);
        });
    },
    createProduct: (productData, callback) => {
        db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
            [productData.name, productData.price, productData.description],
            (err, result) => {
                if (err) throw callback(err);
                return callback(null, result);
            }
        );
    },
};

module.exports = Product