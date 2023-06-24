'use strict';

module.exports = (sequelize, DataTypes) => {
  const Input = sequelize.define('Input', {
    amount: DataTypes.DECIMAL,
    unit: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    cost: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    per_head: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  
  }, { 
    paranoid: true
  });

  Input.associate = function(models) {
    Input.belongsTo(models.Animal, {
      foreignKey: 'animal_id',
      as: 'animal',
      onDelete: 'CASCADE',
    })
    Input.belongsTo(models.Animal, {
      foreignKey: 'groupId',
      as: 'group',
      onDelete: 'CASCADE',
    })
    
    Input.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })
    Input.belongsTo(models.Farm, {
      foreignKey: 'farm_id',
      as: 'farm',
      onDelete: 'CASCADE',
    })
  }
 
  return Input;
};

