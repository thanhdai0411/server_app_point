const Point = require('../model/Points');
const User = require('../model/User');
const HistoryPoint = require('../model/HistoryPoint');

const pointController = {
    addPoints: async (req, res) => {
        const { userID, code_scanner } = req.body;
        try {
            const exitsPoint = await Point.findOne({ code_scanner });
            if (exitsPoint) {
                return res.json({
                    success: false,
                    message: 'Code scanner already exist',
                });
            }

            const newPoint = new Point(req.body);
            const savePoint = await newPoint.save();

            // update user
            if (userID) {
                const user = User.findOne({ _id: userID });
                await user.updateOne({ $push: { points: savePoint.code_scanner } });
            }

            res.json({ success: true, data: savePoint });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    getPoints: async (req, res) => {
        try {
            // const point
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    getAllPoint: async (req, res) => {
        try {
            const points = await Point.find();
            res.json({ success: true, data: points });
        } catch {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    deleteAllPoint: async (req, res) => {
        try {
            await User.updateMany({ _id: req.params.id }, { points: [] });
            await Point.remove();
            res.json({ success: true, message: 'Delete all collection point' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = pointController;
