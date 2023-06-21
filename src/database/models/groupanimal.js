'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupAnimal = sequelize.define('GroupAnimal', {

    name:DataTypes.STRING,
    description:DataTypes.STRING,
    active_only:DataTypes.BOOLEAN,
    type:DataTypes.STRING,
    records:{
      type: DataTypes.JSONB,
    },
    

  }, { });
  GroupAnimal.associate = function(models) {
      GroupAnimal.belongsTo(models.Farm, {
        foreignKey: 'farm_id',
        as: 'farm',
        onDelete: 'CASCADE',
      })
     
      GroupAnimal.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'user',
        onDelete: 'CASCADE',
      })
     
  
  };

  return GroupAnimal;
};



