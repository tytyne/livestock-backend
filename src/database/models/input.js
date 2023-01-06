'use strict';

module.exports = (sequelize, DataTypes) => {
  const Input = sequelize.define('Input', {
    amount: DataTypes.STRING,
    unit: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE
  
  }, { });

  Input.associate = function(models) {
    Input.belongsTo(models.Animal, {
      foreignKey: 'animal_id',
      as: 'animal',
      onDelete: 'CASCADE',
    })
    
    Input.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })
  }
 
  return Input;
};







// input[amount]: 56
// input[unit]: kilograms
// input[type]: hjkl
// input[cost]: 78
// input[description]: fghujio fghjk fghj
// input[date]: 2023-01-06