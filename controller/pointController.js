const Point = require('../model/Points');
const User = require('../model/User');

const pointController = {
    addPoints: async (req, res) => {
        const { userID } = req.body;
        try {
            const newPoint = new Point(req.body);
            const savePoint = await newPoint.save();

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
            await Point.remove();
            res.json({ success: true, message: 'Delete all collection point' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = pointController;
