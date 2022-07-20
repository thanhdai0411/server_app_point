const router = require('express').Router();

const auth = require('../../middleware/auth');
const uploadImg = require('../../middleware/uploadImg');

//! home
const { home, loginPage } = require('../../controller/viewController/homeViewController');

//! Auth
const {
    pageRedirect,
    login,
    getAllUserLogin,
    register,
    logout,
    getUserLogin,
    checkPermission,
    loginJwtRoles,
} = require('../../controller/viewController/authViewController');

//! Trash
const {
    getUserTrash,
    deleteUser,
    restoreUser,
    deleteForeverUser,
    deleteAllUser,
    deleteForeverAllUser,
    restoreAllUser,
} = require('../../controller/viewController/trashViewController');

//! User
const {
    managerUser,
    getUser,
    roleUser,
} = require('../../controller/viewController/managerUserViewController');

//! Point
const {
    getSettingPoint,
    pointPage,
    settingPoint,
    addSetting,
    deleteSettingPoint,
} = require('../../controller/viewController/pointViewController');

//! Gift
const {
    addGift,
    giftPage,
    getGift,
    deleteGift,
    getDetailGift,
    renderUpdateGift,
    updateGift,
} = require('../../controller/viewController/giftViewController');

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

//!home
// router.get('/home', home);
router.get('/', pageRedirect);
router.post('/register', register);
//=============================================

//? C1
// router.post('/login', login);
//? C2
router.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/view/auth', // login fail redirect to page register account
    }),
    checkPermission
);

//=============================================
router.get('/logout', logout);
router.get('/auth', loginPage);
router.get('/get_all/user/login', getAllUserLogin);
router.get('/get/user/login', getUserLogin);

//!point
router.get('/point', pointPage);
router.get('/point/get', getSettingPoint);
router.post('/point/add', addSetting);
router.delete('/point/delete/:id', deleteSettingPoint);

//!gift
router.post('/gift/add', uploadImg.single('image'), addGift);
router.put('/gift/update/:id', uploadImg.single('image'), updateGift);
router.get('/gift', giftPage);
router.get('/gift/get', getGift);
router.get('/gift/get/:id', getDetailGift);
router.delete('/gift/delete/:id', deleteGift);
router.get('/gift/render-update/:id', renderUpdateGift);
///view/gift/update/

//!user
// router.get('/user', auth, managerUser);
router.get('/user', auth, managerUser);
router.get('/user/:id', auth, getUser);
router.patch('/user/role/:id', auth, roleUser);

//!trash
router.delete('/user/trash/:id/delete', auth, deleteUser);
// router.delete('/user/trash/:id/delete-all', deleteAllUser);

router.delete('/user/trash/:id/delete-forever', auth, deleteForeverUser);
// router.delete('/user/trash/:id/delete-forever-all', deleteForeverAllUser);

router.patch('/user/trash/:id/restore', auth, restoreUser);
// router.patch('/user/trash/:id/restore-all', restoreAllUser);
router.get('/trash/user', auth, getUserTrash);

module.exports = router;
