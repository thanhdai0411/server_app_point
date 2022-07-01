const router = require('express').Router();
const {
    addUser,
    getAllUser,
    getAnUserById,
    getAnUserByPhoneNumber,
    updateUserByID,
    updateUserByPhone,
    updateUser,
} = require('../controller/userController');

router.post('/add', addUser);
router.put('/update_user_phone/:phone_number', updateUserByPhone);
router.put('/update_user_id/:id', updateUserByID);
router.put('/update/:id', updateUser);
router.get('/get_id/:id', getAnUserById);
router.get('/get_phone/:phone_number', getAnUserByPhoneNumber);
router.get('/get_all', getAllUser);

module.exports = router;
