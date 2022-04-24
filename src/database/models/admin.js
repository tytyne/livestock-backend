'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {

    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    role:DataTypes.STRING,
    password:DataTypes.STRING,
    status:DataTypes.STRING,
    isVerified:DataTypes.BOOLEAN,
   
  
  }, { });
 
  return Admin;
};