
let Sequelize = require('sequelize')
let sequelize = require('./db')

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  insertTime: {
    type: Sequelize.DATE,
    field: 'insert_time',
    defaultValue: Sequelize.NOW
  }
}, {
  freezeTableName: true // Model 对应的表名将与model名相同
});



// 强制创建数据库(删除之前数据库)
// User.sync({force: true}).then(function () {
//   // 已创建数据表
//   return User.create({
//     firstName: `'John😳😂😁'"`,
//     lastName: 'Hancock😳😂😁'
//   });
// });



// setTimeout(() => {
//   User.findAll().then(function(history) {
//     console.log('User-findall--', history.length)
//     history.forEach((item, index) => {
//       console.log('item---', item.dataValues.firstName);
      
//     })
//   })
// }, 3000);


exports.mysqlDate = async (obj) => {
  let firstName = obj.firstName
  let lastName = obj.lastName
  // User.sync({force: true}).then(function () {
  //   return User.create({
  //     firstName: firstName,
  //     lastName: lastName,
  //     insertTime: new Date()
  //   });
  // });

}
