
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {

    name: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.STRING
 
  
  }, { });
 
  return Item;
};