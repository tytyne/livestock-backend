'use strict';

module.exports = (sequelize, DataTypes) => {
  const vaccination= sequelize.define('Vaccination', {
    name: DataTypes.STRING,
    disease: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    measurement:DataTypes.STRING

 
  
  }, { });
 
  return vaccination;
};