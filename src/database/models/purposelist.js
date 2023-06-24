'use strict';

module.exports = (sequelize, DataTypes) => {
  const PurposeList= sequelize.define('PurposeList', {
    name: DataTypes.STRING,
    shortcode: DataTypes.STRING
 
  
  }, {
    paranoid: true
   });
 
  return PurposeList;
};