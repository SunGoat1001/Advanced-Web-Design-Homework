const express = require('express');
const router = express.Router();
const rectangleController = require('./controller/rectangleController');

router.get('/', rectangleController.getHomepage);
router.post('/calculate', rectangleController.createData);
router.get('/list', rectangleController.getList);

module.exports = router;