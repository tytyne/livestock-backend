'use strict';

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define('Operation', {

    farmId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    itemId:DataTypes.INTEGER,
    item_name:DataTypes.STRING,
    item_type:DataTypes.STRING,
    quantity:DataTypes.INTEGER,
    amount:DataTypes.INTEGER
    
  }, { });
 
  Operation.associate = function(models) {
    // associations can be defined here
    Operation.belongsTo(models.Item, {
      foreignKey: 'itemId'
    });
    Operation.belongsTo(models.Farm, {
      foreignKey: 'farmId'
    });
    Operation.belongsTo(models.Animal, {
      foreignKey: 'animalId'
    });
    Operation.belongsTo(models.User, {
      foreignKey: 'createdBy'
    });

  }

  return Operation;
};