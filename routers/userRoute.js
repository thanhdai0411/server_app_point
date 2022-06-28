const router = require('express').Router();
const { addUser, getAllUser, getAnUser } = require('../controller/userController');

router.post('/add', addUser);
router.get('/get/:id', getAnUser);
router.get('/get_all', getAllUser);

module.exports = router;
