const router = require('express').Router();

const {
    getAllHistoryPoint,
    addHtrPointById,
    addHtrPointByPhone,
    getAnHtrPoint,
} = require('../controller/historyPointController');

router.post('/add_id', addHtrPointById);
router.post('/add_phone', addHtrPointByPhone);
router.get('/get/:id', getAnHtrPoint);
router.get('/get_all', getAllHistoryPoint);

module.exports = router;
