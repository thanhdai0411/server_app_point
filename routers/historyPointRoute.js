const router = require('express').Router();

const {
    getAllHistoryPoint,
    addHtrPointById,
    addHtrPointByPhone,
    getAnHtrPoint,
    deleteAllHtr,
} = require('../controller/historyPointController');

router.post('/add_id', addHtrPointById);
router.post('/add_phone', addHtrPointByPhone);
router.get('/get/:id', getAnHtrPoint);
router.get('/get_all', getAllHistoryPoint);
router.delete('/delete_all/:id', deleteAllHtr);

module.exports = router;
