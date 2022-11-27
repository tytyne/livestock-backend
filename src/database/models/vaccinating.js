'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vaccinating = sequelize.define('Vaccinating', {
    onsetDate: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    measurement: DataTypes.STRING,
    createdBy:DataTypes.STRING,
    nextAppointment: DataTypes.STRING,

  }, { });
  Vaccinating.associate = function(models) {
  Vaccinating.belongsTo(models.Vaccination, {
    foreignKey: 'vaccinationId',
    as: 'vaccination',
    onDelete: 'CASCADE',
  })
  
  Vaccinating.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })
  // Vaccinating.belongsTo(models.Animal, {
  //   foreignKey: 'groupAnimalId',
  //   as: 'groupAnimal',
  //   onDelete: 'CASCADE',
  // })
  // Vaccinating.belongsTo(models.Animal, {
  //   foreignKey: 'treatmentMethodId',
  //   as: 'treatmentId',
  //   onDelete: 'CASCADE',
  // })
  }
  
 
  return Vaccinating;
};

