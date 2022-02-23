'use strict';

module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('Medicine', {

    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
 
  
  }, { });
 
  return Medicine;
};