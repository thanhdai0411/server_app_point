const router = require('express').Router();
const {
    sendExchangeGiftMail,
    sendMailConfirm,
} = require('../controller/sendMailController');

router.post('/exchange_gift', sendExchangeGiftMail);

module.exports = router;
