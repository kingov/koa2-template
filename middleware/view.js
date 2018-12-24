const path = require('path');
const fs = require('fs');

function view(app, opts = {}) {
  const {baseDir = ''} = opts;

  // 将需要的属性或者方法 `view` 挂载在 `app.context` 上，`app.context.view`
  app.context.render = function(page = '', obj = {}) {
    let ctx = this;
    let filePath = path.join(baseDir, page + '.html');
    if (fs.existsSync(filePath)) {
      // let tpl = fs.readFileSync(filePath, 'binary');
      let tpl = fs.readFileSync(filePath, 'utf8');
      ctx.body = tpl;
    } else {
      throw new Error(`can not found ${page}.html !`);
    }
  };
}

module.exports = view;
