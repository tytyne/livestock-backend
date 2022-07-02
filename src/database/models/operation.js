'use strict';

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define('Operation', {

    operationDate: DataTypes.STRING,
    // farmId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER,
    item_name: DataTypes.INTEGER,
    item_type: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
  
  
  }, { });

  Operation.associate = function(models) {
   
    // Operation.hasOne(models.User, {
    //   foreignKey: 'createdBy',
    //   onDelete: 'CASCADE',
    // })

    Operation.belongsTo(models.Farm, {
      foreignKey: 'farmId',
      onDelete: 'CASCADE',
    })
    Operation.belongsTo(models.Animal, {
      foreignKey: 'animalId',
      onDelete: 'CASCADE',
    })
    Operation.hasOne(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    })

    Operation.hasOne(models.Item, {
      foreignKey: 'itemId',
      onDelete: 'CASCADE',
    })
    
  };

 
 
  return Operation;
};