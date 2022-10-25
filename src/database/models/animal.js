module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {

    earring_num:DataTypes.STRING,
    birthdate:DataTypes.STRING,
    ageInDays:DataTypes.INTEGER,
    ageInWeeks:DataTypes.INTEGER,
    ageInMonths: DataTypes.INTEGER,
    ageInYears:DataTypes.INTEGER,
    birthkgs: DataTypes.STRING,
    parent:DataTypes.STRING,
    sex:DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    createdBy:DataTypes.INTEGER,
    animalCost:DataTypes.INTEGER,
    deathReason:DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      defaultValue:'active'
    },
   
  
  }, { });
  Animal.associate = function(models) {
 
    Animal.belongsTo(models.Farm, {
      foreignKey: 'farmId',
      as: 'farm',
      onDelete: 'CASCADE',
    })
   Animal.belongsTo(models.PurposeList, {
      foreignKey: 'purposeId',
      as: 'purposeList',
      onDelete: 'CASCADE',
    })
   Animal.belongsTo(models.AnimalCategory, {
      foreignKey: 'animalCategoryId',
      as: 'animalCategory',
      onDelete: 'CASCADE',
    })
    Animal.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })
  
  };

  return Animal;
};

