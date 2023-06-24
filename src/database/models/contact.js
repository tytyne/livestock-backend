
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
  
  }, {
    paranoid: true
   });

  Contact.associate = function(models) {
    Contact.belongsTo(models.Farm, {
      foreignKey: 'farm_id',
      as: 'farm',
      onDelete: 'CASCADE',
    })
  }
  return Contact;
}