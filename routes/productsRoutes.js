const express = require('express');
const productsControl = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsControl.getAllProducts);

module.exports = router;