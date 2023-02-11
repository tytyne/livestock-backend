'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vaccinating = sequelize.define('Vaccinating', {
    onsetDate: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    measurement: DataTypes.STRING,
    nextAppointment: DataTypes.STRING,
    animalId:DataTypes.STRING,
    record_transaction:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

  }, { });
  Vaccinating.associate = function(models) {
  Vaccinating.belongsTo(models.Vaccination, {
    foreignKey: 'vaccinationId',
    as: 'vaccination',
    onDelete: 'CASCADE',
  })
  
  // Vaccinating.belongsTo(models.Animal, {
  //   foreignKey: 'animalId',
  //   as: 'animal',
  //   onDelete: 'CASCADE',
  // })
  Vaccinating.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
  // Vaccinating.belongsTo(models.Animal, {
  //   foreignKey: 'treatmentMethodId',
  //   as: 'treatmentId',
  //   onDelete: 'CASCADE',
  // })
  }
  
 
  return Vaccinating;
};

