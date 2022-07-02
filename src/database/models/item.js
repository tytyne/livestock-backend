
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    categoryId:DataTypes.INTEGER,
    name: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.STRING
 
  
  }, { });
 
  Item.associate = function(models) {
   
    Item.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'CASCADE',
    })
    Item.belongsTo(models.User, {
      foreignKey: 'userIDD000',
      as: 'author',
      onDelete: 'CASCADE',
    })
    
  };
  return Item;
};