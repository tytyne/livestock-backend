'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('Farmer', {

    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    animal_cat: DataTypes.STRING,
    nid:DataTypes.STRING,
    gender: DataTypes.STRING,
    farmer_cat:DataTypes.STRING,
    bank_acc: DataTypes.STRING,
    province:DataTypes.STRING,
    district:DataTypes.STRING,
    cell:DataTypes.STRING,
    sector:DataTypes.STRING,
    village:DataTypes.STRING,
    status:{
      type:DataTypes.ENUM('active','unactive'),
      defaultValue:'active'
    },
    createdBy: DataTypes.INTEGER,
   
  }, { });
  Farmer.associate = function(models) {
  Farmer.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'manager',
    onDelete: 'CASCADE',
  })
};

  return Farmer;
};