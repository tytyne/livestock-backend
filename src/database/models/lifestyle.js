module.exports = (sequelize, DataTypes) => {
  const Lifestyle = sequelize.define('Lifestyle', {

    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    unexpected_exit: DataTypes.DATE,
    unexpected_cause:DataTypes.STRING,
    facteur:DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      defaultValue:'dead'
    },
   
  
  }, { });
  Lifestyle.associate = function(models) {
   
    Lifestyle.belongsTo(models.Animal, {
      foreignKey: 'animalId',
      as: 'animal',
      onDelete: 'CASCADE',
    })
    Lifestyle.belongsTo(models.GroupAnimal, {
      foreignKey: 'groupAnimalId',
      as: 'groupAnimal',
      onDelete: 'CASCADE',
    })
    Lifestyle.belongsTo(models.AnimalCategory, {
      foreignKey: 'animalCategoryId',
      as: 'animalCategory',
      onDelete: 'CASCADE',
    })
    
  };

  return Lifestyle;
};