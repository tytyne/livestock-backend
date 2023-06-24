'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {

    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,
    updatedAt: false,
   
  }, {
    paranoid: true
   });
 

  return Category;
};