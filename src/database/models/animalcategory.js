'use strict';

module.exports = (sequelize, DataTypes) => {
  const AnimalCategory = sequelize.define('AnimalCategory', {
    name: DataTypes.STRING,
    shortcode: DataTypes.STRING
 
  
  }, { });
 
  return AnimalCategory;
};