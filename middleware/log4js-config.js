const log4js = require('log4js')
 
log4js.configure({
    replaceConsole: true,
    pm2: true,
    appenders: {
        stdout: {//控制台输出
            type: 'stdout'
        },
        req: {//请求日志
            type: 'dateFile',
            filename: 'logs/reqlog/',
            pattern: 'req-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        err: {//错误日志
            type: 'dateFile',
            filename: 'logs/errlog/',
            pattern: 'err-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        wx: {//微信推送
          type: 'dateFile',
          filename: 'logs/wxlog/',
          pattern: 'oth-yyyy-MM-dd.log',
          alwaysIncludePattern: true
      },
    },
    categories: {
        default: { appenders: ['stdout', 'req'], level: 'debug' }, // appenders:采用的appender,取appenders项,level:设置级别
        err: { appenders: ['stdout', 'err'], level: 'error' },
        wx: { appenders: ['stdout', 'wx'], level: 'info' }
    }
})

// exports.getLogger = function (name) { // name取categories项
//     return log4js.getLogger(name || 'default')
// }

// exports.useLogger = function (app, logger) { // 用来与express结合
//     app.use(log4js.connectLogger(logger || log4js.getLogger('default'), {
//         format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'//自定义输出格式
//     }))
// }

const errlog = log4js.getLogger('err')
const log = log4js.getLogger('wx')
const defaultLog = log4js.getLogger('default')

module.exports = () => {
  return (ctx, next) => {

    // log4js.connectLogger(defaultLog, {
    //     format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'//自定义输出格式
    // })

    ctx.errlog = (a, b, c, d) => {
        errlog.error(a || '', b || '', c || '', d || '')
    }

    ctx.infolog = (a, b, c, d) => {
        log.info(a || '', b || '', c || '', d || '')
    }
    let startTime = new Date()

    next()

    let endTime = new Date()
    let spendTime = startTime = endTime
    let remoteIp = ctx.req.headers['x-forwarded-for'] ||
    ctx.req.connection.remoteAddress ||
    ctx.req.socket.remoteAddress ||
    ctx.req.connection.socket.remoteAddress;

    defaultLog.info(`remote-ip=${remoteIp}; method=${ctx.method}; spend-time:${spendTime} host=${ctx.header.host}; status=${ctx.status}; user-agent=${ctx.header['user-agent']}`)

  }
}
