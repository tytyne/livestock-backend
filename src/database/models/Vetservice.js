'use strict';
module.exports = (sequelize, DataTypes) => {
  const VetService = sequelize.define('VetService', {

    name: DataTypes.STRING,
    quantity:DataTypes.INTEGER,
    price: DataTypes.INTEGER,
 
  }, { });
 

  return VetService;
};