const router = require('express').Router();
const uploadImg = require('../middleware/uploadImg');

const { uploadImage, getImage } = require('../controller/imageController');

router.post('/upload', uploadImg.single('file'), uploadImage);

router.get('/get/:filename', getImage);

module.exports = router;
