'use strict';
module.exports = (sequelize, DataTypes) => {
  const SickBay = sequelize.define('SickBay', {
    onsetDate:DataTypes.DATE,
    intervention: DataTypes.STRING,
    observation:DataTypes.STRING,
    medicine_name:DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    withdrawal_date: DataTypes.DATE,
    measurement:DataTypes.STRING
   
  }, { });
  SickBay.associate = function(models) {
  SickBay.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })
 
  SickBay.belongsTo(models.GroupAnimal, {
    foreignKey: 'groupAnimalId',
    as: 'groupAnimal',
    onDelete: 'CASCADE',
  })

  SickBay.belongsTo(models.AnimalCategory, {
    foreignKey: 'animalCategoryId',
    as: 'animalCategory',
    onDelete: 'CASCADE',
  })
  SickBay.belongsTo(models.Medicine, {
    foreignKey: 'medicineId',
    as: 'medicine',
    onDelete: 'CASCADE',
  })
  SickBay.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
 
 
};

  return SickBay;
};


