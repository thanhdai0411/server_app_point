const router = require('express').Router();
const { addInfoBank } = require('../controller/infoBankController');

router.post('/add', addInfoBank);

module.exports = router;
