const router = require('express').Router();
const { addTransfer } = require('../controller/transferMoneyController');

router.post('/add', addTransfer);

module.exports = router;
