const router = require('express').Router();
const {
    addInfoBank,
    getAllInfoBank,
    getInfoBank,
    deleteAllInfoBank,
    updateInfoBank,
} = require('../controller/infoBankController');

router.post('/add', addInfoBank);
router.put('/update/:id', updateInfoBank);
router.delete('/delete_all/:id', deleteAllInfoBank);
router.get('/get/:id', getInfoBank);
router.get('/get_all', getAllInfoBank);

module.exports = router;
