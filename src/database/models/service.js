'use strict';

module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {

    description: DataTypes.STRING,
    code: DataTypes.STRING
    
  }, { });
 
  
  return Service;
};