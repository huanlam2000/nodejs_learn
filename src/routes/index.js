const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // Trang News
    app.use('/news', newsRouter);

    // Trang chủ
    app.use('/', siteRouter);
}

module.exports = route;
