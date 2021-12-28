'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {

    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    role:DataTypes.STRING,
    password:DataTypes.STRING,
    isVerified:DataTypes.BOOLEAN,
   
  
  }, { });
 
  return Admin;
};