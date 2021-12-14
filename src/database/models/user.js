'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    isVerified:DataTypes.BOOLEAN,
   
  
  }, { });
 
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Farmer, {
      foreignKey: 'userId',
      as: 'farmers',
      onDelete: 'CASCADE',
    });
  }
  return User;
};