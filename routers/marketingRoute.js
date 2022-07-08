const router = require('express').Router();
const uploadImg = require('../middleware/uploadImg');

const {
    addMkt,
    getAllMarketing,
    getMarketing,
    deleteMarketing,
    deleteAllMarketing,
    updateMarketing,
} = require('../controller/marketingController');
router.post('/add', uploadImg.single('image'), addMkt);
router.get('/get/:id', getMarketing);
router.get('/get_all', getAllMarketing);
router.put('/update/:id', updateMarketing);
router.delete('/delete/:id', deleteMarketing);
router.delete('/delete_all', deleteAllMarketing);

module.exports = router;
