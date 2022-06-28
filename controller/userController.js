const User = require('../model/User');

// !demo add user for add Point, accumulate

const userController = {
    addUser: async (req, res) => {
        const { username, email, address, phone_number, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Missing username or/and email, password',
            });
        }
        try {
            //check user exist
            const user = await User.findOne({ username });
            const _email = await User.findOne({ email });
            if (user || _email) {
                res.status(400).json({
                    success: false,
                    message: 'User already existing or/and email',
                });
            }

            const newUser = new User(req.body);
            const saveUser = await newUser.save();

            res.json({ success: true, data: saveUser });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
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
    getAnUser: async (req, res) => {
        try {
            const user = await User.findById({ _id: req.params.id });
            res.json({ success: true, data: user });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = userController;
