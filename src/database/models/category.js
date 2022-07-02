'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {

    shortcode: DataTypes.STRING,
    name: DataTypes.STRING,
   
  }, { });
  // Category.hasMany(models.Item, {
  //   foreignKey: 'categoryId',
  //   as: 'category',
  //   onDelete: 'CASCADE',
  // })

  return Category;
};