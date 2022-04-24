module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {

    farmId: DataTypes.STRING,
    earring_num:DataTypes.STRING,
    animal_cat: DataTypes.STRING,
    birthdate:DataTypes.DATE,
    birthkgs: DataTypes.STRING,
    parent:DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    createdBy:DataTypes.INTEGER,
    status:{
      type:DataTypes.STRING,
      defaultValue:'active'
    },
   
  
  }, { });
  Animal.associate = function(models) {
    Animal.belongsTo(models.Farm, {
      foreignKey: 'farmId',
      as: 'owner',
      onDelete: 'CASCADE',
    })
    Animal.belongsTo(models.User, {
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

  return Animal;
};