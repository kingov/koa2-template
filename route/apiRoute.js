const Router = require('koa-router');
const send = require('koa-send');
const path = require('path');
const fs = require('fs');

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

// 下载文件, 该路由需要由a标签触发
route.get('/get-file', async (ctx) => {
  // body的值一定要给
  ctx.body = ''
  let fileName = 'xm3.jpeg'
  // 高速浏览器需要下载文件, 而不是在新窗口打开文件
  ctx.attachment(fileName);
  await send(ctx, fileName, { root: __dirname + '/../public/img/' })
})

route.get('/download', async function (ctx) {
  let filePath = path.join( __dirname, '/../public/img/')
  let fileName = 'xm2.jpeg'
  // let fileName = 'xm3.jpeg'
  let img = fs.readFileSync(filePath + fileName)
  ctx.set('Content-disposition', 'attachment;filename=' + fileName);
  ctx.body = img
});


route.get('/stream-download', async function (ctx) {
  let filePath = path.join( __dirname, '/../public/img/')
  let fileName = 'xm2.jpeg'
  ctx.set('Content-Type', 'application/octet-stream');
  ctx.set('Content-disposition', 'attachment;filename=' + fileName);
  ctx.body = fs.createReadStream(filePath + fileName)
});


route.get('/mysql-date', (ctx) => {
  let obj = {
    firstName: ctx.query.firstName,
    lastName: ctx.query.lastName
  }
  // apiCtrl.mysqlDate(obj)
  ctx.body = obj
})

module.exports = route
