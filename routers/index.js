const productRoute = require('./productRoute');
const pointRoute = require('./pointRoute');
const userRoute = require('./userRoute');

const routerConfig = (app) => {
    app.use('/api/product', productRoute);
    app.use('/api/point', pointRoute);
    app.use('/api/user', userRoute);
};

module.exports = routerConfig;
