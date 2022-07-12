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

//!home
// router.get('/home', home);
router.get('/', pageRedirect);
router.post('/register', register);
router.post('/login', login);
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
router.get('/user', auth, managerUser);
router.get('/user/:id', auth, getUser);

//!trash
router.delete('/user/trash/:id/delete', deleteUser);
// router.delete('/user/trash/:id/delete-all', deleteAllUser);

router.delete('/user/trash/:id/delete-forever', deleteForeverUser);
// router.delete('/user/trash/:id/delete-forever-all', deleteForeverAllUser);

router.patch('/user/trash/:id/restore', restoreUser);
// router.patch('/user/trash/:id/restore-all', restoreAllUser);
router.get('/trash/user', getUserTrash);

module.exports = router;
