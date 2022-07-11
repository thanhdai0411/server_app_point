const router = require('express').Router();

const { getAllSetting, getAnSetting } = require('../controller/pointSettingController');

router.get('/get_all', getAllSetting);
router.get('/get/:id', getAnSetting);

module.exports = router;
