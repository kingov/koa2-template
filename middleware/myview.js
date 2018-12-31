const path = require('path');
const fs = require('fs');




module.exports = (opts) => {
  return (ctx, next) => {
    try {
      let { baseDir = path.join(__dirname, '../views') } = opts;
      // 将需要的属性或者方法 `view` 挂载在 `.context` 上，`app.context.view`
      ctx.render = function(page = '', obj = {}) {
        let ctx = this;
        let filePath = path.join(baseDir, page + '.html');
        if (fs.existsSync(filePath)) {
          // let tpl = fs.readFileSync(filePath, 'binary');
          let tpl = fs.readFileSync(filePath, 'utf8');
          ctx.body = tpl;
        } else {
          throw new Error(`can not found ${page}.html !`);
        };
      };
      next();
    } catch (error) {
      console.error(error)
    }
  }
}



