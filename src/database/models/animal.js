module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {

    farmerId: DataTypes.STRING,
    nid: DataTypes.STRING,
    owner: DataTypes.STRING,
    animal_cat: DataTypes.STRING,
    birthdate:DataTypes.DATE,
    birthkgs: DataTypes.STRING,
    parent:DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    unexpected_exit: DataTypes.DATE,
    unexpected_cause:DataTypes.STRING,
   
  
  }, { });
 

  return Animal;
};