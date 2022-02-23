module.exports = (sequelize, DataTypes) => {
  const AnimalInfo = sequelize.define('AnimalInfo', {

    animalId: DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    unexpected_exit: DataTypes.DATE,
    unexpected_cause:DataTypes.STRING,
    facteur:DataTypes.STRING,
    createdBy:DataTypes.INTEGER,
   
  }, { });
  AnimalInfo.associate = function(models) {
    AnimalInfo.belongsTo(models.Animal, {
      foreignKey: 'animalId',
      as: 'anim',
      onDelete: 'CASCADE',
    })
    AnimalInfo.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'creater',
      onDelete: 'CASCADE',
    })
    // Animal.belongsTo(models.Operation, {
    //   foreignKey: 'operationId',
    //   as: 'transactions',
    //   onDelete: 'CASCADE',
    // })
  };

  return AnimalInfo;
};