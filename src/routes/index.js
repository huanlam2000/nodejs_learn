const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
    // Trang News
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    // Trang chủ
    app.use('/', siteRouter);
}

module.exports = route;
