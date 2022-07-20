const User = require('../model/User');
const HistoryPoint = require('../model/HistoryPoint');

// !demo add user for add Point, accumulate

const userController = {
    addUser: async (req, res) => {
        const { phone_number } = req.body;
        try {
            if (!phone_number) {
                return res.status(400).json({
                    success: false,
                    message: 'Missing phone-number',
                });
            }
            //check user exist

            const _phone_number = await User.findOne({ phone_number });
            if (_phone_number) {
                res.status(400).json({
                    success: false,
                    message: 'User already existing  phone-number',
                });
            }

            const newUser = new User({
                ...req.body,
            });
            const saveUser = await newUser.save();

            res.json({ success: true, data: saveUser });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },
    getAllUser: async (req, res) => {
        try {
            const users = await User.find();

            res.json({ success: true, data: users });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    getAnUserById: async (req, res) => {
        try {
            const user = await User.findById({ _id: req.params.id })
                .populate('history_point')
                .populate('game')
                .populate('info_dealer')
                .populate('info_bank');

            res.json({
                success: true,
                data: user,
            });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getAnUserByPhoneNumber: async (req, res) => {
        try {
            const user = await User.findOne({
                phone_number: req.params.phone_number,
            })
                .populate('history_point')
                .populate('game')
                .populate('info_bank')
                .populate('info_dealer');
            res.json({ success: true, data: user });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.json({ success: true, message: 'Update user success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    countNumberPointUserByPhone: async (req, res) => {
        const { amount_plus, phone_number } = req.body;

        try {
            const user = await User.findOneAndUpdate(
                { phone_number },
                { $inc: { number_point: amount_plus } }
            );
            res.json({ success: true, message: 'Update user success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    //[DELETE] : /delete/:id
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete({ _id: req.params.id });
            res.json({ success: true, message: 'Delete user success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    //[DELETE] : /delete_all
    deleteAllUser: async (req, res) => {
        try {
            await User.remove();
            res.json({ success: true, message: 'Delete all user success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    // add point

    // PUT : update_user_phone/:phone_number  (donate)
    updateUserByPhone: async (req, res) => {
        try {
            const updateUser = await User.findOneAndUpdate(
                { phone_number: req.params.phone_number },
                req.body
            );
            res.json({ success: true, message: 'Update user success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    // PUT : /update_user_id/:id
    updateUserByID: async (req, res) => {
        const { number_point } = req.body;
        try {
            const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
            });
            // await HistoryPoint.findByIdAndUpdate(
            //     { user_id: req.params.id },
            //     {
            //         $push: { accumulate_point: number_point },
            //     }
            // );
            res.json({
                success: true,
                message: 'Update number point success',
                data: user,
            });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = userController;
