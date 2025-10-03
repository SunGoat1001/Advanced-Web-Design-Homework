var express = require('express');
var router = express.Router();
const RectangleController = require('../controllers/rectangleController');

/* GET home page. */
router.get('/', RectangleController.caculatePerimeter);
router.post('/', RectangleController.caculatePerimeter);

module.exports = router;
