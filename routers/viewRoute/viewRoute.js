const router = require('express').Router();

const { home, loginPage } = require('../../controller/viewController/homeViewController');

const { login } = require('../../controller/viewController/authViewController');

const {
    getUserTrash,
    deleteUser,
    restoreUser,
    deleteForeverUser,
    deleteAllUser,
    deleteForeverAllUser,
    restoreAllUser,
} = require('../../controller/viewController/trashViewController');

const {
    managerUser,
    getUser,
} = require('../../controller/viewController/managerUserViewController');

//!home
// router.get('/home', home);
router.get('/login', loginPage);
router.post('/login/user', login);

//!user
router.get('/user', managerUser);
router.get('/user/:id', getUser);

//!trash
router.delete('/user/trash/:id/delete', deleteUser);
// router.delete('/user/trash/:id/delete-all', deleteAllUser);

router.delete('/user/trash/:id/delete-forever', deleteForeverUser);
// router.delete('/user/trash/:id/delete-forever-all', deleteForeverAllUser);

router.patch('/user/trash/:id/restore', restoreUser);
// router.patch('/user/trash/:id/restore-all', restoreAllUser);
router.get('/trash/user', getUserTrash);

module.exports = router;
