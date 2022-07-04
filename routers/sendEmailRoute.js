const router = require('express').Router();
const { sendMail } = require('../controller/sendMailController');

router.post('/', sendMail);

module.exports = router;
