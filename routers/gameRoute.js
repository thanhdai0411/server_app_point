const router = require('express').Router();

const {
    incAmountSpin,
    updateAmountSpin,
    subtractAmountSpin,
    countAmountSpin,
} = require('../controller/gameController');

router.post('/add', incAmountSpin);
router.put('/_update/:id', updateAmountSpin);
router.patch('/update_amount/:id', subtractAmountSpin);
router.patch('/update_amount_already/:id', countAmountSpin);

module.exports = router;
