'use strict';

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define('Operation', {

    farmerId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER,
    medicineId: DataTypes.STRING,
    feedId:DataTypes.INTEGER,
    vetServiceId:DataTypes.INTEGER,
    serviceId: DataTypes.STRING,
    service_name: DataTypes.STRING,
    unit:DataTypes.INTEGER,
    price:DataTypes.INTEGER,
    sub_total:DataTypes.INTEGER
    
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
    
    Operation.hasOne(models.Service,{
      foreignKey:'serviceId',
      as:'service'
    })

  }

  return Operation;
};