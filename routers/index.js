const productRoute = require('./productRoute');
const pointRoute = require('./pointRoute');
const userRoute = require('./userRoute');
const historyPointRoute = require('./historyPointRoute');
const infoBankRoute = require('./infoBankRoute');
const imageUploadRoute = require('./imageUploadRoute');
const sendEmailRoute = require('./sendEmailRoute');

const routerConfig = (app) => {
    app.use('/api/product', productRoute);
    app.use('/api/point', pointRoute);
    app.use('/api/user', userRoute);
    app.use('/api/history_point', historyPointRoute);
    app.use('/api/info_bank', infoBankRoute);
    app.use('/api/file', imageUploadRoute);
    app.use('/api/send_email', sendEmailRoute);
};

module.exports = routerConfig;
