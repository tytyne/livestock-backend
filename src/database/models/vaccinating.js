'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vaccinating = sequelize.define('Vaccinating', {
    onsetDate: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    nextAppointment: DataTypes.STRING,

 
  
  }, { });
  Vaccinating.associate = function(models) {
  Vaccinating.belongsTo(models.Vaccination, {
    foreignKey: 'vaccinationId',
    onDelete: 'CASCADE',
  })
  
  Vaccinating.belongsTo(models.GroupAnimal, {
    foreignKey: 'groupAnimalId',
    onDelete: 'CASCADE',
  })

  // Vaccinating.belongsTo(models.Animal, {
  //   foreignKey: 'animalId',
  //   onDelete: 'CASCADE',
  // })

  Vaccinating.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
  }
  
 
  return Vaccinating;
};

