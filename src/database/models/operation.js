'use strict';

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define('Operation', {

    farmerId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER,
    medicineId: DataTypes.STRING,
    service_cat: DataTypes.STRING,
    service_name: DataTypes.STRING,
    total:DataTypes.INTEGER
   
  
  }, { });
 
  Operation.associate = function(models) {
    // associations can be defined here
    Operation.belongsTo(models.Farmer, {
      foreignKey: 'farmerId'
    });
    Operation.belongsTo(models.Animal, {
      foreignKey: 'animalId'
    });
    Operation.hasMany(models.Medicine, {
      foreignKey: 'medicineId',
      as: 'medicines',
    });
    


  }

  return Operation;
};