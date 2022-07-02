'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', {

    name: DataTypes.STRING,
    province:DataTypes.STRING,
    district:DataTypes.STRING,
    sector:DataTypes.STRING,
    cell:DataTypes.STRING,
    village:DataTypes.STRING,
    others:DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      defaultValue:'active'
    },
    // createdBy: DataTypes.INTEGER,
   
  }, { });
  Farm.associate = function(models) {
  Farm.belongsTo(models.Farmer, {
    foreignKey: 'farmerId',
    as: 'farmer',
    onDelete: 'CASCADE',
  })
  Farm.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
 
 
};

  return Farm;
};