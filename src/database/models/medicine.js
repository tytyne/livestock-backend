'use strict';

module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('Medicine', {

    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
 
  
  }, { });
 

  return Medicine;
};