'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    occupation: DataTypes.INTEGER,
    adminId:DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    role:DataTypes.STRING,
    password:DataTypes.STRING,
    isVerified:DataTypes.BOOLEAN,
    status:DataTypes.STRING,
    assignedTo:DataTypes.UUID,
   
  
  }, { });
 
  User.associate = function(models) {
    // associations can be defined here
    User.associate = function(models) {
      User.belongsTo(models.Admin, {
        foreignKey: 'adminId',
        as:'admin',
        onDelete: 'CASCADE',
      })
    }
   

  }
  return User;
};