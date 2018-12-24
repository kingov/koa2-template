let Sequelize = require('sequelize')

var sequelize = new Sequelize(
  'rank', // 数据库名
  'root',   // 用户名
  'wangzheng',   // 用户密码
  {
      'dialect': 'mysql',  // 数据库使用mysql
      'host': 'localhost', // 数据库服务器ip
      'port': 3306,        // 数据库服务器端口
      // 'define': {
      //     // 字段以下划线（_）来分割（默认是驼峰命名风格）
      //     // 'underscored': true
      // }
  }
);


// 检测是否连接成功
// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

module.exports = sequelize;
