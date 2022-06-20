const router = require('express').Router();
const { addProduct } = require('../controller/productController');

router.get('/product/add', addProduct);
module.exports = router;
