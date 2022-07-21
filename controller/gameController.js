const Game = require('../model/Game');
const User = require('../model/User');

const gameController = {
    incAmountSpin: async (req, res) => {
        const { phone_number } = req.body;
        console.log({ phone_number });
        try {
            if (!phone_number) {
                return res
                    .status(404)
                    .json({ success: false, message: 'Missing number phone' });
            }
            const user = await User.findOne({ phone_number: phone_number });
            if (!user) {
                return res
                    .status(404)
                    .json({ success: false, message: 'Phone number error' });
            }
            const amount = new Game(req.body);
            await amount.save();

            await user.updateOne({ game: amount._id });

            res.json({ success: true, data: amount });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateAmountSpin: async (req, res) => {
        try {
            await Game.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.json({ success: true, message: 'update amount spin success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    subtractAmountSpin: async (req, res) => {
        try {
            await Game.findByIdAndUpdate(
                { _id: req.params.id },
                { $inc: { amount: -1 } }
            );
            res.json({ success: true, message: 'update amount spin success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    countAmountSpin: async (req, res) => {
        try {
            await Game.findByIdAndUpdate(
                { _id: req.params.id },
                { $inc: { already_spin: 1 } }
            );
            res.json({ success: true, message: 'update COUNT amount spin success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = gameController;
