'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('Farmer', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    nid:DataTypes.STRING,
    gender: DataTypes.STRING,
    farmer_cat:DataTypes.STRING,
    bank_acc: DataTypes.STRING,
    province:DataTypes.STRING,
    district:DataTypes.STRING,
    sector:DataTypes.STRING,
    cell:DataTypes.STRING,
    village:DataTypes.STRING,
    others:DataTypes.STRING,
    status:{
      type:DataTypes.ENUM('active','unactive'),
      defaultValue:'active'
    },
 
   
  }, { });
  Farmer.associate = function(models) {
  Farmer.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
  Farmer.belongsTo(models.Farm, {
    foreignKey: 'farm_id',
    as: 'farm',
    onDelete: 'CASCADE',
  })

};

  return Farmer;
};