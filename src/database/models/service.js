'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {

    name: DataTypes.STRING,
    price: DataTypes.STRING,
 
  }, { });
 

  return Service;
};