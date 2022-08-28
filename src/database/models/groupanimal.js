'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupAnimal = sequelize.define('GroupAnimal', {

    name:DataTypes.STRING,
    number: DataTypes.INTEGER,
    femaleNumber:DataTypes.INTEGER,
    maleNumber: DataTypes.INTEGER,
    birthdate:DataTypes.STRING,
    ageInDays:DataTypes.INTEGER,
    ageInWeeks:DataTypes.INTEGER,
    ageInMonths: DataTypes.INTEGER,
    ageInYears:DataTypes.INTEGER,
    status:{
      type:DataTypes.STRING,
      defaultValue:'active'
    },
    expected_exit:DataTypes.DATE,
   
  
  }, { });
  GroupAnimal.associate = function(models) {
      GroupAnimal.belongsTo(models.Farm, {
        foreignKey: 'farmId',
        as: 'farm',
        onDelete: 'CASCADE',
      })
      GroupAnimal.belongsTo(models.PurposeList, {
        foreignKey: 'purposeId',
        as: 'purposeList',
        onDelete: 'CASCADE',
      })
      GroupAnimal.belongsTo(models.AnimalCategory, {
        foreignKey: 'animalCategoryId',
        as: 'animalCategory',
        onDelete: 'CASCADE',
      })
      GroupAnimal.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'user',
        onDelete: 'CASCADE',
      })
     
  
  };

  return GroupAnimal;
};



