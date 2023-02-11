'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treatment = sequelize.define('Treatment', {

    type: DataTypes.STRING,
    product:DataTypes.STRING,
    batch:DataTypes.STRING,
    amount:DataTypes.DECIMAL,
    mode:DataTypes.STRING,
    site:DataTypes.STRING,
    withdrawal_date:DataTypes.DATE,
    retreat_date:DataTypes.DATE,
    technician:DataTypes.STRING,
    cost:DataTypes.STRING,
    record_transaction:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
     },
    description:DataTypes.STRING,
    date:DataTypes.DATE,
    keywords:DataTypes.STRING,
    animalId:DataTypes.UUID
   
   
  }, { });
  Treatment.associate = function(models) {
    // Treatment.belongsTo(models.Animal, {
    //   foreignKey: 'animalId',
    //   as: 'animal',
    //   onDelete: 'CASCADE',
    // })
    // Treatment.belongsTo(models.Animal, {
    //   foreignKey: 'groupAnimalId',
    //   as: 'groupAnimal',
    //   onDelete: 'CASCADE',
    // })
    Treatment.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })
  }

  return Treatment;
};








