const Admin = require('../../model/Admin');
const homeViewController = {
    home: (req, res) => {
        res.render('home');
    },
    loginPage: (req, res) => {
        res.render('pages/auth');
    },
};

module.exports = homeViewController;
