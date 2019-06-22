
const sequelize = require('../mysql/ot-app-mysql');

const Sequelize = require('sequelize');
const category = require('./client/category.js');
const categoryDetail = require('./client/categorydetail.js');
const goods = require('./client/goods.js');
const discover = require('./client/discover.js');
const attrName = require('./client/attrName.js');
const attrVal = require('./client/attrVal.js');
const photo = require('./client/photo.js');
const adv = require('./client/adv.js');
const discovergoods = require('./client/discovergoods.js');

goods.belongsTo(category, {foreignKey: 'categoryId', constraints: false});
goods.belongsTo(categoryDetail, {foreignKey: 'categoryDetailId', constraints: false});


attrName.belongsTo(discover, {foreignKey: 'discoverId', constraints: false});
attrVal.belongsTo(attrName, {foreignKey: 'attrNameId', constraints: false});

photo.belongsTo(goods, {foreignKey: 'goodsId', constraints: false});

discovergoods.belongsTo(goods, {foreignKey: 'goodsId', constraints: false});
discovergoods.belongsTo(discover, {foreignKey: 'discoverId', constraints: false});


category.hasMany(categoryDetail, {foreignKey: 'categoryId',  sourceKey: 'id', constraints: false});
categoryDetail.belongsTo(category, {foreignKey: 'categoryId', constraints: false});


// `hasOne`同样适用

// force: true will drop the table if it already exists
sequelize.sync({ force: false }).then(function () {
  // Table created
  console.log('@@##db sync!-------------------------------------------------');
}).catch((err) => {
  console.log('@@##db sync failed.... ' + err);
});

