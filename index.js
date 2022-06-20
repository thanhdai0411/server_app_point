const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 8889;

//! import
const routerConfig = require('./routers');
const connectMongGoDB = require('./config/db');

//! config
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//! connect mongodb
connectMongGoDB();

//! config router
routerConfig(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
