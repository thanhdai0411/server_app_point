const HistoryPoint = require('../model/HistoryPoint');
const User = require('../model/User');

// note : Htr : History
const historyPointController = {
    addHtrPointById: async (req, res) => {
        const { user_id } = req.body;
        try {
            const newHtrPoint = new HistoryPoint(req.body);
            const saveHtrPoint = await newHtrPoint.save();

            if (user_id) {
                const user = await User.findById({ _id: user_id });
                await user.updateOne({ $push: { history_point: saveHtrPoint._id } });
            }

            res.json({ success: true, data: saveHtrPoint });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    addHtrPointByPhone: async (req, res) => {
        const { phone_number } = req.body;

        try {
            const newHtrPoint = new HistoryPoint(req.body);
            const saveHtrPoint = await newHtrPoint.save();

            if (phone_number) {
                const user = await User.findOne({
                    phone_number: phone_number,
                });
                await user.updateOne({ $push: { history_point: saveHtrPoint._id } });
            }

            res.json({ success: true, data: saveHtrPoint });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    getAllHistoryPoint: async (req, res) => {
        const htr_point = await HistoryPoint.find();
        res.json({ success: true, data: htr_point });
    },
    // [GET]: /get/:id
    getAnHtrPoint: async (req, res) => {
        const htr = await HistoryPoint.findById({ _id: req.params.id });
        res.json({ success: true, data: htr });
    },
};

module.exports = historyPointController;
