const User = require('../model/User');
const HistoryPoint = require('../model/HistoryPoint');

// !demo add user for add Point, accumulate

const userController = {
    addUser: async (req, res) => {
        const { username, email, address, phone_number, password } = req.body;
        if (!username || !email || !password || !phone_number) {
            return res.status(400).json({
                success: false,
                message: 'Missing username or/and email, password, phone-number',
            });
        }
        try {
            //check user exist
            const user = await User.findOne({ username });
            const _email = await User.findOne({ email });
            const _phone_number = await User.findOne({ phone_number });
            if (user || _email || _phone_number) {
                res.status(400).json({
                    success: false,
                    message: 'User already existing or/and email, phone-number',
                });
            }

            const newUser = new User(req.body);
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
            const user = await User.findById({ _id: req.params.id }).populate(
                'history_point'
            );
            res.json({ success: true, data: user });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    getAnUserByPhoneNumber: async (req, res) => {
        try {
            const user = await User.findOne({
                phone_number: req.params.phone_number,
            }).populate('history_point');
            res.json({ success: true, data: user });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.json({ success: true, data: user });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    // add point

    // PUT : add_number_point_phone/:phone_number  (donate)
    updateUserByPhone: async (req, res) => {
        try {
            await User.findOneAndUpdate(
                { phone_number: req.params.phone_number },
                req.body
            );
            res.json({ success: true, message: 'Update number point success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    // PUT : add_number_point_id/:id
    updateUserByID: async (req, res) => {
        const { number_point } = req.body;
        try {
            await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
            // await HistoryPoint.findByIdAndUpdate(
            //     { user_id: req.params.id },
            //     {
            //         $push: { accumulate_point: number_point },
            //     }
            // );
            res.json({ success: true, message: 'Update number point success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = userController;
