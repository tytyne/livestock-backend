'use strict';

module.exports = (sequelize, DataTypes) => {
  const Feed= sequelize.define('Feed', {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    measurement:DataTypes.STRING,
    description:DataTypes.STRING

 
  
  }, { });
  Feed.associate = function(models) {
 
  Feed.belongsTo(models.AnimalCategory, {
      foreignKey: 'animalCategoryId',
      as: 'animalCategory',
      onDelete: 'CASCADE',
    })
  }
 
  return Feed;
};