var express = require('express');
var router = express.Router();
const squareController = require('../controllers/squareController');  

router.get('/', squareController.showForm);  

router.post('/calculate', squareController.calculateSquare);  

module.exports = router;
