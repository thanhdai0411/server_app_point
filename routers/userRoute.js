const router = require('express').Router();
const uploadImage = require('../middleware/uploadImg');
const {
    addUser,
    getAllUser,
    getAnUserById,
    getAnUserByPhoneNumber,
    updateUserByID,
    updateUserByPhone,
    updateUser,
    deleteUser,
    deleteAllUser,
    countNumberPointUserByPhone,
} = require('../controller/userController');

router.post('/add', uploadImage.single('avatar'), addUser);
router.put('/update_user_phone/:phone_number', updateUserByPhone);
router.put('/update_user_id/:id', updateUserByID);
router.put('/update/:id', updateUser);
router.patch('/update_number_point', countNumberPointUserByPhone);
router.delete('/delete/:id', deleteUser);
router.delete('/delete_all', deleteAllUser);
router.get('/get_id/:id', getAnUserById);
router.get('/get_phone/:phone_number', getAnUserByPhoneNumber);
router.get('/get_all', getAllUser);

module.exports = router;
