const Admin = require('../../model/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const authViewController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        console.log(username);
        try {
            if (!username) {
                res.render('pages/404');
            }
            const admin = await Admin.findOne({ username: username });
            if (admin) {
                res.render('pages/404');
            }
            var hashPassword = bcrypt.hashSync(password, salt);

            const newAdmin = new Admin({ username, password: hashPassword });
            const saveAdmin = await newAdmin.save();
            res.json(saveAdmin);
        } catch (err) {
            console.log(err.message);
        }
    },
    register: async (req, res) => {},
};

module.exports = authViewController;
