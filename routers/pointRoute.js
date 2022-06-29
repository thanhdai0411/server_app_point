const router = require('express').Router();
const {
    addPoints,
    getPoints,
    deleteAllPoint,
    getAllPoint,
} = require('../controller/pointController');
router.get('/get', getPoints);
router.post('/add', addPoints);
router.get('/get_all', getAllPoint);
router.delete('/delete_all/:id', deleteAllPoint);

module.exports = router;
