
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListExpense = sequelize.define('ListExpense', {

    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,

    updatedAt: false,
   
  }, { });
 
  return ListExpense;
};