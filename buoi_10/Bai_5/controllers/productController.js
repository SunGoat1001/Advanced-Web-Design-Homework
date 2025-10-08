const Product = require('../models/productModel');

const productController = {
    getProducts: (req, res) => {
        Product.getAllProducts((err, products) => {
            if (err) return res.status(500).json({ error: 'Database query error' });
            return res.render('product', { products });
        });
    },
    showAddProductForm: (req, res) => {
        return res.render('addProductForm');
    },
    addProduct: (req, res) => {
        const productData = req.body;
        console.log('::Product Data get from client::', productData)
        Product.createProduct(productData, (err) => {
            if (err) return res.status(500).json({ error: 'Failed to add product' });
            return res.redirect('/');
        });
    },
};

module.exports = productController;