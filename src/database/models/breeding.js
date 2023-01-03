'use strict';
module.exports = (sequelize, DataTypes) => {
  const Breeding = sequelize.define('Breeding', {
    date:DataTypes.DATE,
    update_animal_status: DataTypes.STRING,
    breeding_method:DataTypes.STRING,
    bred_with_id:DataTypes.STRING,
    technicial: DataTypes.STRING,
    amount: DataTypes.STRING,
    unit: DataTypes.DATE,
    cost:DataTypes.STRING,
    description:DataTypes.STRING
   
  }, { });
  Breeding.associate = function(models) {
  Breeding.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })
 

  Breeding.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
 
 
};

  return Breeding;
};
