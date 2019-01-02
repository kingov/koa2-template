const Router = require('koa-router');
const send = require('koa-send');

let route = new Router()
let apiCtrl = require('../controller/apiCtrl')


route.get('/get-data', async(ctx)=>{
  ctx.body = {
    code: 0,
    msg: '',
    obj: {
      arr: [1,2,3,4,5]
    }
  }
});

// 下载文件
route.get('/get-file', (ctx) => {
  ctx.infolog('get-file下载路径',  __dirname + '/../public/')

  send(ctx, 'img/xm2.jpeg', { root: __dirname + '/../public/' })
})

route.get('/mysql-date', (ctx) => {
  let obj = {
    firstName: ctx.query.firstName,
    lastName: ctx.query.lastName
  }
  apiCtrl.mysqlDate(obj)
  ctx.body = obj
})




module.exports = route


