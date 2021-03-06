const router = require('express').Router();

const uploadImg = require('../middleware/uploadImg');

const {
    addGift,
    getAllGift,
    getGift,
    deleteGift,
    deleteAllGift,
    updateGift,
    getGiftByType,
} = require('../controller/giftController');

router.post('/add', uploadImg.single('image'), addGift);
router.get('/get_all', getAllGift);
router.get('/get/:id', getGift);
router.get('/get/type/:type', getGiftByType);

router.put('/update/:id', updateGift);
router.delete('/delete/:id', deleteGift);
router.delete('/delete_all', deleteAllGift);

module.exports = router;
