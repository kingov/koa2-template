const Router = require('koa-router');

let route = new Router()

route.get('/page', async(ctx, next)=>{
  console.log('page----');
  // ctx.body = '<h3>page</h3>'
  ctx.render('index');
});

route.get('/home', async(ctx, next)=>{
  ctx.body = "Hello /page/home/";
});


module.exports = route
