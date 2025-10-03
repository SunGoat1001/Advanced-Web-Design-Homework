var express = require('express');
var router = express.Router();
const squareController = require('../controllers/squareController');

/* GET home page. */
router.get('/', squareController.showForm);
router.post('/', squareController.calculateSquare);  

module.exports = router;
