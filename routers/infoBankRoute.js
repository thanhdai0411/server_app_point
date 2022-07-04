const router = require('express').Router();
const { addInfoBank, getAllInfoBank } = require('../controller/infoBankController');

router.post('/add', addInfoBank);
router.get('/get_all', getAllInfoBank);

module.exports = router;
