'use strict';

module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('Medicine', {

    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
 
  
  }, { });
 
  Medicine.associate = function(models) {
    Medicine.belongsTo(models.Operation, {
      foreignKey: 'operationId',
      as: 'transits',
      onDelete: 'CASCADE',
    })
  }
  return Medicine;
};