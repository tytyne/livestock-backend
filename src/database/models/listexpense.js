
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListExpense = sequelize.define('ListExpense', {

    type:DataTypes.STRING,
    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,

    updatedAt: false,
   
  }, { 
    paranoid: true
  });
 
  return ListExpense;
};