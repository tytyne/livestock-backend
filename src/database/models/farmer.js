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
    createdBy: DataTypes.INTEGER,



   
  }, { });
  Farmer.associate = function(models) {
  Farmer.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'manager',
    onDelete: 'CASCADE',
  })
  // Farmer.belongsTo(models.Operation, {
  //   foreignKey: 'operationId',
  //   as: 'operations',
  //   onDelete: 'CASCADE',
  // })
};

  return Farmer;
};