'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', {

    name: DataTypes.STRING,
    province:DataTypes.STRING,
    district:DataTypes.STRING,
    sector:DataTypes.STRING,
    cell:DataTypes.STRING,
    village:DataTypes.STRING,
    others:DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      defaultValue:'active'
    },
    // createdBy: DataTypes.INTEGER,
   
  }, {
    paranoid: true
   });
  Farm.associate = function(models) {
    
  Farm.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
  // Farm.belongsTo(models.User, {
  //   foreignKey: 'assignedTo',
  //   as: 'other-user',
  //   onDelete: 'CASCADE',
  // })
 
 
};

  return Farm;
};

