module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {

    farmerId: DataTypes.STRING,
    nid: DataTypes.STRING,
    animal_cat: DataTypes.STRING,
    birthdate:DataTypes.DATE,
    birthkgs: DataTypes.STRING,
    parent:DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    unexpected_exit: DataTypes.DATE,
    unexpected_cause:DataTypes.STRING,
    status:DataTypes.ENUM,
    createdBy:DataTypes.INTEGER,
  
  }, { });
  Animal.associate = function(models) {
    Animal.belongsTo(models.Farmer, {
      foreignKey: 'farmerId',
      as: 'owner',
      onDelete: 'CASCADE',
    })
    Animal.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'creater',
      onDelete: 'CASCADE',
    })
  };

  return Animal;
};