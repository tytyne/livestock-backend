'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    createdBy:DataTypes.INTEGER,
    occupation: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    role:DataTypes.STRING,
    password:DataTypes.STRING,
    isVerified:DataTypes.BOOLEAN,
    status:DataTypes.STRING
   
  
  }, { });
 
  User.associate = function(models) {
    // associations can be defined here
    User.associate = function(models) {
      User.belongsTo(models.Admin, {
        foreignKey: 'createdBy',
        onDelete: 'CASCADE',
      })
    }
    // User.hasMany(models.Farmer, {
    //   foreignKey: 'createdBy',
    //   as: 'producers',
    //   onDelete: 'CASCADE',
    // });

    // User.hasMany(models.Animal, {
    //   foreignKey: 'createdBy',
    //   as: 'wild',
    //   onDelete: 'CASCADE',
    // });

  }
  return User;
};