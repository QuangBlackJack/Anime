const siteRouter = require('./site');
const watchRouter = require('./watch');
const meRouter = require('./me');

function route(app) {
    app.use('/', siteRouter);
    app.use('/watch', watchRouter);
    app.use('/me', meRouter);
}

module.exports = route;
