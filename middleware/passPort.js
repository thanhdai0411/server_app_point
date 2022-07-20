const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const bcrypt = require('bcryptjs');

const Admin = require('../model/Admin');

const checkUserPassPort = new LocalStrategy(async (username, password, done) => {
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return done(null, false);
        }
        const encode = bcrypt.compareSync(password, admin.password);
        if (encode && admin) {
            return done(null, admin);
        } else {
            return done(null, false);
        }
    } catch (err) {
        return done(err);
    }
});

//! save role if permission
passport.serializeUser((admin, done) => done(null, admin.username));

passport.deserializeUser(async (username, done) => {
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return done(null, false);
        }
        return done(null, admin);
    } catch (err) {
        return done(err);
    }
});

module.exports = checkUserPassPort;
