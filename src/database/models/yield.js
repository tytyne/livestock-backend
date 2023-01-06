'use strict';

module.exports = (sequelize, DataTypes) => {
  const Yield = sequelize.define('Yield', {
    qty: DataTypes.STRING,
    date: DataTypes.DATE,
    batch_number: DataTypes.STRING,
    trace_number: DataTypes.STRING,
    grade: DataTypes.STRING,
    price:DataTypes.STRING,
    description:DataTypes.STRING

  
  }, { });
  Yield.associate = function(models) {
    Yield.belongsTo(models.Animal, {
      foreignKey: 'animal_id',
      as: 'animal',
      onDelete: 'CASCADE',
    })
    Yield.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })
  }
 
  return Yield;
};