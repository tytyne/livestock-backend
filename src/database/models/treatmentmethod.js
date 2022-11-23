'use strict';
module.exports = (sequelize, DataTypes) => {
  const TreatmentMethod = sequelize.define('TreatmentMethod', {

    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: false,
    updatedAt: false,
   
  }, { });
 
  return TreatmentMethod;
};