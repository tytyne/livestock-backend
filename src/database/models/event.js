

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {

 
    title:DataTypes.STRING,
    status: DataTypes.STRING,
    hours_spent: DataTypes.INTEGER,
    todo: DataTypes.STRING,
    period:DataTypes.STRING,
    color:DataTypes.STRING,
    checklist:DataTypes.ARRAY(DataTypes.STRING),
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    all_day: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    reference_id: DataTypes.STRING,
    reference_type: DataTypes.INTEGER,
    per_head: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,

   
  }, {
    paranoid: true
   });
  Event.associate = function(models) {
  // Event.belongsTo(models.User, {
  //   foreignKey: 'assigned_to_id',
  //   as: 'user',
  //   onDelete: 'CASCADE',
  // })
  Event.belongsTo(models.Priority, {
    foreignKey: 'priority_id',
    as: 'priority',
    onDelete: 'CASCADE',
  })
  Event.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })

  Event.belongsTo(models.Farm, {
    foreignKey: 'farm_id',
    as: 'farm',
    onDelete: 'CASCADE',
  })
  
  
};

  return Event;
};




