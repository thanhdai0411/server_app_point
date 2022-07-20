const User = require('../../model/User');

const managerUserViewController = {
    managerUser: async (req, res) => {
        try {
            const users = await User.find();
            const numberDeleted = await User.countDeleted();
            res.render('pages/user/main', { users, numberDeleted });
        } catch (err) {
            console.log(err.message);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findById({ _id: req.params.id })
                .populate('history_point')
                .populate('game')
                .populate('info_bank')
                .populate('info_dealer');

            res.render('pages/user/detail', { user });
        } catch (err) {
            console.log(err.message);
        }
    },
    roleUser: async (req, res) => {
        const { role } = req.body;
        try {
            await User.findByIdAndUpdate({ _id: req.params.id }, { role });
            res.redirect('/view/user');
        } catch (err) {
            console.log(err.message);
        }
    },
};

module.exports = managerUserViewController;
