const router = require('express').Router();
const {
    addInfoRegisterDealer,
    updateInfoDealer,
    deleteInfoDealer,
} = require('../controller/infoDealerController');
const uploadImg = require('../middleware/uploadImg');

router.post('/add', uploadImg.array('image_dealer', 3), addInfoRegisterDealer);
router.put('/update/:id', uploadImg.array('image_dealer', 3), updateInfoDealer);
router.delete('/delete/:id', deleteInfoDealer);

module.exports = router;
