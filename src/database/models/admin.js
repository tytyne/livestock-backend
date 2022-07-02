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
  Admin.associate = function(models) {
  
    Admin.hasMany(models.User, {
      foreignKey: 'adminId',
      as: 'admin',
      onDelete: 'CASCADE',
    })
   
  };
  return Admin;
};