'use strict';
module.exports = (sequelize, DataTypes) => {
  const Heighting = sequelize.define('Heighting', {

    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,

    updatedAt: false,
   
  }, { });
 
  return Heighting;
};