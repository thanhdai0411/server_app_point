const router = require('express').Router();
const { addTransfer, buyAmountSpin } = require('../controller/transactionController');

router.post('/number_point', addTransfer);
router.post('/amount_spin', buyAmountSpin);

module.exports = router;
