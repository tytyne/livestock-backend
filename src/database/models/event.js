

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {

    title: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    userId: DataTypes.INTEGER,

   
  }, { });
  Event.associate = function(models) {
  Event.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
    onDelete: 'CASCADE',
  })
 
};

  return Event;
};