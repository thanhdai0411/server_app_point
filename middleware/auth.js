const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (decode) {
            next();
        } else {
            res.json({ success: false, message: 'Token is valid' });
        }
    } else {
        res.redirect('/view/auth');
    }
};

module.exports = auth;
