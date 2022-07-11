'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {

    shortcode: DataTypes.STRING,
    name: DataTypes.STRING,
    

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
   
  }, { });
  // Category.hasMany(models.Item, {
  //   foreignKey: 'categoryId',
  //   as: 'category',
  //   onDelete: 'CASCADE',
  // })

  return Category;
};