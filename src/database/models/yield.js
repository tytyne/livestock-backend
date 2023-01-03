'use strict';

module.exports = (sequelize, DataTypes) => {
  const Yield = sequelize.define('Yield', {
    qty: DataTypes.STRING,
    date: DataTypes.STRING,
    batch_number: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
    price:DataTypes.STRING,
    description:DataTypes.STRING

  
  }, { });
  Yield.associate = function(models) {
    Yield.belongsTo(models.Animal, {
      foreignKey: 'animal_id',
      as: 'animal',
      onDelete: 'CASCADE',
    })
  }
 
  return Yield;
};