const router = require('express').Router();
const {
    addUser,
    getAllUser,
    getAnUserById,
    getAnUserByPhoneNumber,
    addNumberPointByID,
    addNumberPointByPhone,
    updateUser,
} = require('../controller/userController');

router.post('/add', addUser);
router.put('/add_number_point_phone/:phone_number', addNumberPointByPhone);
router.put('/add_number_point_id/:id', addNumberPointByID);
router.put('/update/:id', updateUser);
router.get('/get_id/:id', getAnUserById);
router.get('/get_phone/:phone_number', getAnUserByPhoneNumber);
router.get('/get_all', getAllUser);

module.exports = router;
