
const Koa = require('koa');
const app = new Koa();
const static = require('koa-static')
const Router = require('koa-router');
let myview = require('./middleware/myview')
let path = require('path');
var cors = require('koa2-cors');


let indexRoute = require('./route/indexRoute.js');
let msRoute = require('./route/msRoute.js');
let apiRoute = require('./route/apiRoute.js');

let route = new Router();

app.use(cors());

app.use(static(
  path.join(__dirname, './public/'), {
    hidden: false,  // 是否允许传输隐藏文件
    // 等所有中间件响应之后再响应所请求的静态资源
    // defer: true
  }
));

app.use(myview({baseDir: path.join(__dirname, './views')}))

// 拦截所有请求
app.use((ctx, next) => {
  console.log('---url---', ctx.req.url);
  console.log('---ip---', ctx.req.ip);
  // console.log('---cookies---', ctx.cookies );
  // 执行后面的中间件
  next()
});


// 只用一个/会无法访问, 必须带字符如/index
route.use('/index', indexRoute.routes(), indexRoute.allowedMethods());
route.use('/ms', msRoute.routes(), msRoute.allowedMethods());
route.use('/api', apiRoute.routes(), apiRoute.allowedMethods());

// 响应根路径
route.get('/', (ctx) => {
  try {
    // let num = req.query.obj.name
    // ctx.body = '<h2>路由根路径</h2>'
    ctx.render('index')
  } catch (error) {
    console.log('get /  error', error)
  }
})


app.use(route.routes());
app.use(route.allowedMethods());

// catch 404 and forward to error handler
app.use((ctx, next) => {
  ctx.response.status = 404;
  // ctx.response.body = 'Page Not Found';
  ctx.render('error')
  // next()
})


app.on('error', (err, ctx) => {
    console.error('server error', err);
});


// 未捕获unhandledRejection错误
process.on('unhandledRejection', error => {
  console.log('-unhandledRejection-', error);
});


app.listen(6003);
