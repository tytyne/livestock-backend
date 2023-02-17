'use strict';
module.exports = (sequelize, DataTypes) => {
  const SickBay = sequelize.define('SickBay', {
    onsetDate:DataTypes.DATE,
    intervention: DataTypes.STRING,
    observation:DataTypes.STRING,
    medicine_name:DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    withdrawal_date: DataTypes.DATE,
    measurement:DataTypes.STRING,
    // animalId:DataTypes.STRING,
    record_transaction:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
   
  }, { });
  SickBay.associate = function(models) {

  SickBay.belongsTo(models.Medicine, {
    foreignKey: 'medicineId',
    as: 'medicine',
    onDelete: 'CASCADE',
  })

  SickBay.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })

  SickBay.belongsTo(models.GroupAnimal, {
    foreignKey: 'groupId',
    as: 'group',
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


