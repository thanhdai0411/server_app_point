const router = require('express').Router();
const {
    addProduct,
    getAllProduct,
    getDetailProduct,
    deleteProduct,
    updateProduct,
} = require('../controller/productController');

router.post('/add', addProduct);
router.get('/get_all', getAllProduct);
router.get('/get_detail/:id', getDetailProduct);
router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', updateProduct);

module.exports = router;
