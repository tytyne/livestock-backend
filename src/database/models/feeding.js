'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feeding = sequelize.define('Feeding', {
    onsetDate: DataTypes.DATE,
    description: DataTypes.STRING,
    feed_name: DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    measurement:DataTypes.STRING,
    repeat_until_date:DataTypes.DATE,
    shared:DataTypes.BOOLEAN,
    // groupId:DataTypes.UUID
    
  }, { });
  Feeding.associate = function(models) {
  Feeding.belongsTo(models.Feed, {
    foreignKey: 'feedId',
    as: 'feed',
    onDelete: 'CASCADE',
  })

  Feeding.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })
  Feeding.belongsTo(models.GroupAnimal, {
    foreignKey: 'groupId',
    as: 'group',
    onDelete: 'CASCADE',
  })
 
  Feeding.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })

  };
  
 
  return Feeding;
};
