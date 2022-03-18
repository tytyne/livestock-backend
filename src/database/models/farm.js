'use strict';
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', {

    name: DataTypes.STRING,
    farmerId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    province:DataTypes.STRING,
    district:DataTypes.STRING,
    sector:DataTypes.STRING,
    cell:DataTypes.STRING,
    village:DataTypes.STRING,
    others:DataTypes.STRING,
    status:{
      type:DataTypes.ENUM('active','unactive'),
      defaultValue:'active'
    },
    createdBy: DataTypes.INTEGER,



   
  }, { });
  Farm.associate = function(models) {
  Farm.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'manager',
    onDelete: 'CASCADE',
  })
 
};

  return Farm;
};