const productRoute = require('./productRoute');

const routerConfig = (app) => {
    app.use('/', productRoute);
};

module.exports = routerConfig;
