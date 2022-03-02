'use strict';

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define('Operation', {

    farmerId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER,
    itemId:DataTypes.INTEGER,
    quantity:DataTypes.INTEGER,
    price:DataTypes.INTEGER,
    sub_total:DataTypes.INTEGER,
    total_amount:DataTypes.INTEGER
    
  }, { });
 
  Operation.associate = function(models) {
    // associations can be defined here
    Operation.belongsTo(models.Item, {
      foreignKey: 'itemId'
    });

  }

  return Operation;
};