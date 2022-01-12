'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vetservice = sequelize.define('Vetservice', {

    name: DataTypes.STRING,
    price: DataTypes.STRING,
 
  }, { });
 

  return Vetservice;
};