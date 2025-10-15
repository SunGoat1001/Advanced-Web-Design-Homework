const express = require('express');
const { getHomepage } = require('./controllers/homepageController');
const { getAboutPage } = require('./controllers/aboutController');

const router = express.Router();

router.get('/', getHomepage);
router.get('/about', getAboutPage);

module.exports = router;