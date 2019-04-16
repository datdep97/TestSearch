const nunjucks      = require('nunjucks');
const Router        = require('koa-router');
const configuration = require('../knexfile')['development']; 
const knex          = require('knex')(configuration); 
let   getUser       = new Router();

getUser.get('/search/:name',async (ctx) => {
    let streamer    = await knex.select('*').from('thongtin').where('name', 'like', '%'+ctx.params.name+'%');
    ctx.body = nunjucks.render('index.html',{streamer});
});

module.exports = getUser;
