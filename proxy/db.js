let Sequelize = require('sequelize')

var sequelize = {}

var sequelize = new Sequelize(
  'test', // 数据库名
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
      pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
      },
      // 取消数据库的操作别名如$gt等, 因为会造成警告  sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
      // [Op.or]: [req.body.type, 'B']  Sequelize.Op使用这种方式
      // $or: [req.body.type, 'B']  如果用户输入了$or会造成xss攻击
      operatorsAliases: Sequelize.Op  // Sequelize.Op或者false
      
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
