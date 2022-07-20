const Admin = require('../../model/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const generateToken = (key, valueEncode) =>
    jwt.sign({ [key]: valueEncode }, process.env.ACCESS_TOKEN_SECRET);

const authViewController = {
    pageRedirect: (req, res) => {
        if (req.cookies.token) {
            res.redirect('/view/user');
        } else {
            res.redirect('/view/auth');
        }
    },
    register: async (req, res) => {
        const { username, password } = req.body;
        try {
            if (!username || !password) {
                return res.json({
                    success: false,
                    message: 'Missing username or/and password',
                });
            }
            const admin = await Admin.findOne({ username: username });
            if (admin) {
                return res.json({ success: false, message: 'Username existing' });
            }
            const hashPassword = bcrypt.hashSync(password, salt);

            const newAdmin = new Admin({ username, password: hashPassword });
            const saveAdmin = await newAdmin.save();

            var accessToken = generateToken('adminId', saveAdmin._id);

            res.cookie('token', accessToken, { maxAge: 1000 * 3600 * 24 * 30 });
            res.cookie('username', saveAdmin.username);
            res.redirect('/view/user');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        try {
            if (!username || !password) {
                return res.json({
                    success: false,
                    message: 'Missing username or/and password',
                });
            }

            const admin = await Admin.findOne({ username });

            if (!admin) {
                return res.json({
                    success: false,
                    message: 'Login fail please check username or/and password again !',
                });
            }
            const encode = bcrypt.compareSync(password, admin.password);
            if (encode) {
                var accessToken = generateToken('adminId', saveAdmin._id);

                res.cookie('token', accessToken, { maxAge: 1000 * 3600 * 24 * 30 });
                res.cookie('username', admin.username);
            } else {
                return res.render('pages/fail', {
                    message: 'Login fail please check username or/and password again !',
                });
            }
            res.redirect('/view/user');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    logout: async (req, res) => {
        await res.clearCookie('token');
        res.redirect('/view/auth');
    },

    getUserLogin: async (req, res) => {
        try {
            const admin = await Admin.findById({ _id: req.params.id });
            res.render('partials/header', { username: admin.username });
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    getAllUserLogin: async (req, res) => {
        const users = await Admin.find();
        res.json(users);
    },
    //
    checkPermission: async (req, res) => {
        try {
            const { _id, username } = req.user;
            if (req.isAuthenticated()) {
                //  find Roles and check role user and redirect here
                var accessToken = generateToken('adminId', _id, {
                    maxAge: 1000 * 3600 * 24 * 30,
                });
                res.cookie('token', accessToken);
                res.cookie('username', username);

                res.redirect('/view/user');
            }
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },

    loginJwtRoles: (req, res) => {
        const { username, password } = req.body;

        res.json({
            token: 'JWT ' + generateToken('userName', username),
            user: req.body,
        });
    },
};

module.exports = authViewController;
