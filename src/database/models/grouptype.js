'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupType = sequelize.define('GroupType', {

    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,

    updatedAt: false,
   
  }, { });
 
  return GroupType;
};