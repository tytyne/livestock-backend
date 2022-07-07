'use strict';

module.exports = (sequelize, DataTypes) => {
  const AnimalExpense = sequelize.define('AnimalExpense', {

    creationDate: DataTypes.STRING,
    animalId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER,
    createdBy:DataTypes.INTEGER,
    item_name: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    description: DataTypes.STRING,
    
  
  }, { });

  AnimalExpense.associate = function(models) {
   
    AnimalExpense.belongsTo(models.Animal, {
      foreignKey: 'animalId',
      onDelete: 'CASCADE',
    })
    
    AnimalExpense.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    })

    AnimalExpense.belongsTo(models.Item, {
      foreignKey: 'itemId',
      onDelete: 'CASCADE',
    })
    AnimalExpense.belongsTo(models.User, {
      foreignKey: 'createdBy',
      onDelete: 'CASCADE',
    })
    
  };

 
 
  return AnimalExpense;
};