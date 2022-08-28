'use strict';

module.exports = (sequelize, DataTypes) => {
  const AnimalVaccination = sequelize.define('AnimalVaccination', {
    onsetDate: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    nextAppointment: DataTypes.STRING,

 
  
  }, { });
  AnimalVaccination.associate = function(models) {
  AnimalVaccination.belongsTo(models.Vaccination, {
    foreignKey: 'vaccinationId',
    onDelete: 'CASCADE',
  })
  
  AnimalVaccination.belongsTo(models.GroupAnimal, {
    foreignKey: 'groupAnimalId',
    onDelete: 'CASCADE',
  })
  }
  
 
  return AnimalVaccination;
};

