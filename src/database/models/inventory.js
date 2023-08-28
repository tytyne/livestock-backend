'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stocking = sequelize.define('Stocking', {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    product_id: DataTypes.STRING,
    internal_id: DataTypes.STRING,
    unit:DataTypes.STRING,
    unit_value:DataTypes.STRING,
    unit_weight:DataTypes.STRING,
    track_lots:DataTypes.STRING,
    days_expires:DataTypes.STRING,
    alert_amount:DataTypes.STRING,
    alert_email:DataTypes.STRING,
    description:DataTypes.STRING,
    // projected_empty_date:DataTypes.STRING,
    // qty_remaining:DataTypes.STRING
    
    
  },
  
  // { 
  //   paranoid: true
  // }
  
  );
  Stocking.associate = function(models) {
    Stocking.belongsTo(models.Farm, {
      foreignKey: 'farm_id',
      as: 'farm',
      onDelete: 'CASCADE',
    })
  }
 
  return Stocking;
};

