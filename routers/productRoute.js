const router = require('express').Router();
const {
    addProduct,
    getAllProduct,
    getDetailProduct,
    deleteProduct,
    updateProduct,
} = require('../controller/productController');

router.post('/product/add', addProduct);
router.get('/product/get_all', getAllProduct);
router.get('/product/get_detail/:id', getDetailProduct);
router.delete('/product/delete/:id', deleteProduct);
router.put('/product/update/:id', updateProduct);



module.exports = router;
