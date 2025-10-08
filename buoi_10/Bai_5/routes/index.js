var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', productController.getProducts);
router.get('/product/add', productController.showAddProductForm);
// router.post('/', (req, res) => {

// });
router.post('/products', productController.addProduct);
// router.post('/products', (req, res) => {
//     res.json({ success: true });
// });

module.exports = router;
