'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('Farmer', {

    fullname: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    animal_cat: DataTypes.STRING,
    nid:DataTypes.STRING,
    gender: DataTypes.STRING,
    farmer_cat:DataTypes.STRING,
    bank_acc: DataTypes.STRING,
    location:DataTypes.STRING,
   
  
  }, { });
  Farmer.associate = function(models) {
  Farmer.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'manager',
    onDelete: 'CASCADE',
  })
};

  return Farmer;
};