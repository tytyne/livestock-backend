module.exports = (sequelize, DataTypes) => {
  const Lifestyle = sequelize.define('Lifestyle', {

    animalId: DataTypes.STRING,
    expected_exit: DataTypes.DATE,
    expected_exit_kgs:DataTypes.STRING,
    unexpected_exit: DataTypes.DATE,
    unexpected_cause:DataTypes.STRING,
    facteur:DataTypes.STRING,
    createdBy:DataTypes.INTEGER,
    status:{
      type:DataTypes.ENUM('active','unactive'),
      defaultValue:'active'
    },
   
  
  }, { });
  Lifestyle.associate = function(models) {
   
    Lifestyle.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'creater',
      onDelete: 'CASCADE',
    })
    
  };

  return Lifestyle;
};