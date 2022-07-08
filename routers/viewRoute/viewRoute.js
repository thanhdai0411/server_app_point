const router = require('express').Router();

const { home } = require('../../controller/viewController/homeViewController');

const {
    getUserTrash,
    deleteUser,
} = require('../../controller/viewController/trashViewController');

const {
    managerUser,
    getUser,
} = require('../../controller/viewController/managerUserViewController');

router.get('/home', home);

//user
router.get('/user', managerUser);
router.get('/user/:id', getUser);

// trash
router.delete('/user/trash/:id/delete', deleteUser);
router.get('/trash/user', getUserTrash);

module.exports = router;
