'use strict';
module.exports = (sequelize, DataTypes) => {
  const TreatmentType = sequelize.define('TreatmentType', {
    
    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,
    updatedAt: false,
   
  }, { 
    paranoid: true
  });
 
  return TreatmentType;
};