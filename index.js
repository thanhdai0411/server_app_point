const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8889;

app.use(cors());

//! import
const routerConfig = require('./routers');
const connectMongGoDB = require('./config/db');

//! connect mongodb
connectMongGoDB();

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
