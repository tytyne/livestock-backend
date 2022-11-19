'use strict';

module.exports = (sequelize, DataTypes) => {
  const Priority= sequelize.define('Priority', {
    name: DataTypes.STRING,
    shortcode: DataTypes.STRING
 
  
  }, { });
 
  return Priority;
};