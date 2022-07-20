const router = require('express').Router();
const {
    addInfoRegisterDealer,
    updateInfoDealer,
} = require('../controller/infoDealerController');
const uploadImg = require('../middleware/uploadImg');

router.post('/add', uploadImg.array('image_dealer', 3), addInfoRegisterDealer);
router.put('/update/:id', uploadImg.array('image_dealer', 3), updateInfoDealer);

module.exports = router;
