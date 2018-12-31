const Router = require('koa-router');

let route = new Router()

route.get('/page', async(ctx, next)=>{
  // console.log('page----');
  // ctx.cookies.set('cid','hello-koa2', {
  //   maxAge: '',   // 一个数字表示从 Date.now() 得到的毫秒数
  //   signed: 'idea',   // cookie 签名值
  //   expires: '',   // cookie 过期的 Date
  //   path: '',   // cookie 路径, 默认是'/'
  //   domain: '',   // cookie 域名
  //   secure: '',   // 安全 cookie
  //   httpOnly: '',   // 服务器可访问 cookie, 默认是 true
  //   overwrite: '',   // 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。
  // });
  // ctx.body = '<h3>page</h3>'
  ctx.render('index');
});

route.get('/home', async(ctx, next)=>{
  ctx.body = "Hello /page/home/";
});


module.exports = route
