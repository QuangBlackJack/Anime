const siteRouter = require('./site');
const watchRouter = require('./watch');
const meRouter = require('./me');
const sellinfRouter = require('./selling');
const cartRouter = require('./cart');

function route(app) {
    app.use('/', siteRouter);
    app.use('/watch', watchRouter);
    app.use('/me', meRouter);
    app.use('/sell', sellinfRouter);
    app.use('/cart', cartRouter);
}

module.exports = route;
