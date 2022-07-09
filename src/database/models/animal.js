module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {

    // farmId: DataTypes.INTEGER,
    // userIDD:DataTypes.INTEGER,
    earring_num:DataTypes.STRING,
    animal_cat: DataTypes.STRING,
    birthdate:DataTypes.DATE,
    birthkgs: DataTypes.STRING,
    parent:DataTypes.STRING,
    sex:DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    createdBy:DataTypes.INTEGER,
    status:{
      type:DataTypes.STRING,
      defaultValue:'active'
    },
   
  
  }, { });
  Animal.associate = function(models) {
 
    Animal.hasOne(models.AnimalInfo, {
      foreignKey: 'AnimalInfoId',
      as: 'info',
      onDelete: 'CASCADE',
    })
    Animal.hasOne(models.Lifestyle, {
      foreignKey: 'AnimalId',
      as: 'lifestyle',
      onDelete: 'CASCADE',
    })
  
  };

  return Animal;
};