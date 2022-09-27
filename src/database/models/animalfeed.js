'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnimalFeed = sequelize.define('AnimalFeed', {
    onsetDate: DataTypes.STRING,
    description: DataTypes.STRING,
    feed_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    
  }, { });
  AnimalFeed.associate = function(models) {
  AnimalFeed.belongsTo(models.Feed, {
    foreignKey: 'feedId',
    onDelete: 'CASCADE',
  })
  
  AnimalFeed.belongsTo(models.GroupAnimal, {
    foreignKey: 'groupAnimalId',
    onDelete: 'CASCADE',
  })
  AnimalFeed.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    onDelete: 'CASCADE',
  })
  AnimalFeed.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
  }
  
 
  return AnimalFeed;
};
