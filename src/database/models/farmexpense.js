
'use strict';

module.exports = (sequelize, DataTypes) => {
  const FarmExpense = sequelize.define('FarmExpense', {

    creationDate: DataTypes.STRING,
    farmId: DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER,
    itemId:DataTypes.INTEGER,
    createdBy:DataTypes.INTEGER,
    item_name: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    
  
  }, { });

  FarmExpense.associate = function(models) {
   
    FarmExpense.belongsTo(models.Farm, {
      foreignKey: 'farmId',
      onDelete: 'CASCADE',
    })
    
    FarmExpense.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    })

    FarmExpense.belongsTo(models.Item, {
      foreignKey: 'itemId',
      onDelete: 'CASCADE',
    })
    FarmExpense.belongsTo(models.User, {
      foreignKey: 'createdBy',
      onDelete: 'CASCADE',
    })
    
  };

 
 
  return FarmExpense;
};