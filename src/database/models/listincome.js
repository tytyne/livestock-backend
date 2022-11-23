
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListIncome = sequelize.define('ListIncome', {

    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,

    updatedAt: false,
   
  }, { });
 
  return ListIncome;
};