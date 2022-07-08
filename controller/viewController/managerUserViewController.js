const User = require('../../model/User');

const managerUserViewController = {
    managerUser: async (req, res) => {
        try {
            const users = await User.find();
            res.render('pages/user/main', { users });
        } catch (err) {
            console.log(err.message);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findById({ _id: req.params.id })
                .populate('info_bank')
                .populate('history_point');
            res.render('pages/user/detail', { user });
        } catch (err) {
            console.log(err.message);
        }
    },
};

module.exports = managerUserViewController;
