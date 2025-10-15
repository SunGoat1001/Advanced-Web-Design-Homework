var express = require('express');
var router = express.Router();
const squareController = require('../controllers/squareController');

/* GET home page. */
router.get('/add', squareController.showForm);
router.post('/add', squareController.calculateSquare);

router.get('/about', squareController.aboutPage);

module.exports = router;
