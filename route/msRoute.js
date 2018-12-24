const Router = require('koa-router');

let route = new Router()

route.get('/home', async(ctx)=>{
  ctx.body = "Hello /ms/home/";
});


module.exports = route
