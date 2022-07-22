const User = require('../../model/User');
const Game = require('../../model/Game');

const trashViewController = {
    deleteUser: async (req, res) => {
        try {
            const user = await User.delete({ _id: req.params.id });

            res.redirect('/view/user');
        } catch (err) {
            console.log(err.message);
        }
    },
    deleteAllUser: async (req, res) => {
        try {
            await User.delete();
            res.redirect('/view/user');
        } catch (err) {
            console.log(err.message);
        }
    },
    deleteForeverUser: async (req, res) => {
        console.log(req.params.id);
        try {
            const user = await User.findById({ _id: req.params.id }).populate('game');
            if (user.game) await Game.findByIdAndDelete({ _id: user.game._id });
            await User.findByIdAndDelete({ _id: req.params.id });
            res.redirect('/view/trash/user');
        } catch (err) {
            console.log(err.message);
        }
    },
    deleteForeverAllUser: async (req, res) => {
        try {
            await User.findByIdAndDelete({ _id: req.params.id });
            res.redirect('/view/trash/user');
        } catch (err) {
            console.log(err.message);
        }
    },
    getUserTrash: async (req, res) => {
        const userDeleted = await User.findDeleted();
        res.render('pages/trash', { userDeleted });
    },

    restoreUser: async (req, res) => {
        try {
            await User.restore({ _id: req.params.id });
            res.redirect('/view/trash/user');
        } catch (err) {
            console.log({ err_restore: err.message });
        }
    },
    restoreAllUser: async (req, res) => {
        try {
            await User.restore();
            res.redirect('/view/trash/user');
        } catch (err) {
            console.log({ err_restore: err.message });
        }
    },
};

module.exports = trashViewController;
