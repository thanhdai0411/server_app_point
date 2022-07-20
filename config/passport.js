const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcryptjs');
const Admin = require('../model/Admin');

const userLogin = new LocalStrategy(async (username, password, done) => {
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return done(null, false);
            // or you could create a new account
        }
        const encode = bcrypt.compareSync(password, admin.password);

        if (encode) {
            return done(null, admin);
        } else {
            return done(null, false);
        }
    } catch (err) {
        return done(err, false);
    }
});

var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await Admin.findById({ _id: payload._id });
        if (!user) {
            return done(null, false);
            // or you could create a new account
        }
        done(null, user);
    } catch (err) {
        return done(err, false);
    }
});

passport.use(userLogin);
passport.use(jwtLogin);
