const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 8889;

app.use(cors());
app.use(methodOverride('_method'));

//! import
const routerConfig = require('./routers');
const connectMongGoDB = require('./config/db');
const configViewEngine = require('./config/viewEngine');

//! connect mongodb
connectMongGoDB();

//! set view engine
configViewEngine(app);

//! config
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//! config router
routerConfig(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//
