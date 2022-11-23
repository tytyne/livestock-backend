module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define('Measurement', {
    condition_score: DataTypes.STRING,
    date: DataTypes.DATE,
    fec: DataTypes.INTEGER,
    height:DataTypes.STRING,
    temp:DataTypes.STRING,
    weight:DataTypes.STRING

  }, { });

  Measurement.associate = function(models) {
    Measurement.belongsTo(models.Animal, {
      foreignKey: 'animalId',
      as: 'animal',
      onDelete: 'CASCADE',
    })
  }
 
  return Measurement;
};


