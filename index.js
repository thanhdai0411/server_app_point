const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
var methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const io = require('socket.io')();

const passport = require('passport');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 8889;

//! middleware
app.use(cors());
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 10,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

//! import
const routerConfig = require('./routers');
const connectMongGoDB = require('./config/db');
const configViewEngine = require('./config/viewEngine');
const checkUserPassPort = require('./middleware/passPort');

//! connect mongodb
connectMongGoDB();

//! set view engine
configViewEngine(app);

//! config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
passport.use(checkUserPassPort);

//! config router
routerConfig(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//
