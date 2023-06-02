'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    date: DataTypes.STRING,
    category: DataTypes.STRING,
    ref_id:DataTypes.UUID,
    col_id:DataTypes.UUID,
    description:DataTypes.STRING,
  
  }, { });
 
  return Activity;
};



