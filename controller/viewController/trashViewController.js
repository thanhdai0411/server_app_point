const User = require('../../model/User');

const trashViewController = {
    deleteUser: async (req, res) => {
        try {
            console.log(req.params.id);
            await User.delete({ _id: req.params.id });
            res.redirect('/view/user');
        } catch (err) {
            console.log(err.message);
        }
    },
    getUserTrash: async (req, res) => {
        const userDeleted = await User.findDeleted();
        console.log({ userDeleted });
        res.render('pages/trash', { userDeleted });
    },
};

module.exports = trashViewController;
