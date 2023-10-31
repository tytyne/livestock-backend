'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryLog = sequelize.define('InventoryLog', {
    date: DataTypes.DATE,
    amount: DataTypes.DECIMAL,
    source:DataTypes.STRING,
    description:DataTypes.STRING,
    original_qty:DataTypes.DECIMAL,
    qty_remaining:DataTypes.DECIMAL
  }, { 
  });
  InventoryLog.associate = function(models) {
    InventoryLog.belongsTo(models.Stocking,{
      foreignKey:'inventory_id',
      as:'inventory',
      onDelete:'CASCADE'
    })
    InventoryLog.belongsTo(models.Warehousing,{
      foreignKey:'warehouse_id',
      as:'warehouse',
      onDelete:'CASCADE'
    })

  }
  return InventoryLog;
};


