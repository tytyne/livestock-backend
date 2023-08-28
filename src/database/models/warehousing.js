'use strict';
module.exports = (sequelize, DataTypes) => {
  const Warehousing = sequelize.define('Warehousing', {
    name: DataTypes.STRING,
    internal_id: DataTypes.STRING,
    description:DataTypes.STRING
  
  },
  
  // { 
  //   paranoid: true
  // }
  
  );

  Warehousing.associate = function(models) {
    Warehousing.belongsTo(models.Farm, {
      foreignKey: 'farm_id',
      as: 'farm',
      onDelete: 'CASCADE',
    })
  }

  return Warehousing;
};

