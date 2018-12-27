const Router = require('koa-router');

let route = new Router()

route.get('/a', async(ctx)=>{
  console.log('msg----------')
  ctx.render('ms');
});

route.get('/home', async(ctx)=>{
  ctx.body = "Hello /ms/home/";
});

route.get('/data', async(ctx)=>{
  ctx.body = {name: 'tom', arr: [1,2,3], addr: 'usa'}
});


module.exports = route
