
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {

    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    type:DataTypes.STRING,
    tin:DataTypes.STRING,
    description:DataTypes.STRING,
  
  }, { });
  return Contact;
}