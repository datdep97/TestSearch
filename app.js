const Koa     = require('koa');
const getUser = require('./getModule/getUser');

const app     = new Koa();

app.use(getUser.routes());
app.listen(1704);
