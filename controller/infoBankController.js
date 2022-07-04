const InfoBank = require('../model/InfoBanking');
const User = require('../model/User');
const infoBankController = {
    addInfoBank: async (req, res) => {
        const { user_id } = req.body;

        try {
            const info_bank = new InfoBank(req.body);
            const save_info = await info_bank.save();

            if (user_id) {
                await User.findByIdAndUpdate(
                    { _id: user_id },
                    { $push: { info_bank: save_info._id } }
                );
            }

            res.json({ success: true, data: save_info });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getAllInfoBank: async (req, res) => {
        try {
            const all_info = await InfoBank.find();
            res.json({ success: true, data: all_info });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = infoBankController;
