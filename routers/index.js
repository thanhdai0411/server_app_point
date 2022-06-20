const productRoute = require('./productRoute');

const routerConfig = (app) => {
    app.use('/api', productRoute);
};

module.exports = routerConfig;
