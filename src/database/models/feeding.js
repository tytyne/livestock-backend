'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feeding = sequelize.define('Feeding', {
    onsetDate: DataTypes.STRING,
    description: DataTypes.STRING,
    feed_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    repeat_until_date:DataTypes.DATE
    
  }, { });
  Feeding.associate = function(models) {
  Feeding.belongsTo(models.Feed, {
    foreignKey: 'feedId',
    onDelete: 'CASCADE',
  })

  Feeding.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })
 
  // Feeding.belongsTo(models.GroupAnimal, {
  //   foreignKey: 'groupAnimalId',
  //   as: 'groupAnimal',
  //   onDelete: 'CASCADE',
  // })
  Feeding.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
  Feeding.belongsTo(models.Inventory, {
    foreignKey: 'inventory_location_id',
    as: 'inventory',
    onDelete: 'CASCADE',
  })
  }
  
 
  return Feeding;
};
