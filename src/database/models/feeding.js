'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feeding = sequelize.define('Feeding', {
    onsetDate: DataTypes.DATE,
    description: DataTypes.STRING,
    feed_name: DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    measurement:DataTypes.STRING,
    details:DataTypes.STRING,
    repeat_until_date:DataTypes.DATE,
    // shared:DataTypes.BOOLEAN,
    per_head: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  }, { 
    paranoid: true
  });
  Feeding.associate = function(models) {
  // Feeding.belongsTo(models.Feed, {
  //   foreignKey: 'feedId',
  //   as: 'feed',
  //   onDelete: 'CASCADE',
  // })

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
  Feeding.belongsTo(models.Farm, {
    foreignKey: 'farm_id',
    as: 'farm',
    onDelete: 'CASCADE',
  })

  };
  
 
  return Feeding;
};
