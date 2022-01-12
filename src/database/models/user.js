'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    occupation: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    isVerified:DataTypes.BOOLEAN,
   
  
  }, { });
 
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Farmer, {
      foreignKey: 'createdBy',
      as: 'producers',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Animal, {
      foreignKey: 'createdBy',
      as: 'wild',
      onDelete: 'CASCADE',
    });

  }
  return User;
};