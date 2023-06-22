'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {

    type: DataTypes.STRING,
    amount:DataTypes.DECIMAL,
    date:DataTypes.DATE,
    reporting_year:DataTypes.STRING,
    vendor:DataTypes.STRING,
    category:DataTypes.STRING,
    ref_Id:DataTypes.UUID,
    ref_type:DataTypes.STRING,
    check_number:DataTypes.STRING,
    keywords:DataTypes.STRING,
    payment_system:DataTypes.STRING,
    description:DataTypes.STRING,
    paid:DataTypes.BOOLEAN,
    customer:DataTypes.STRING,
   
   
  }, { });
  Transaction.associate = function(models) {

    Transaction.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })

    Transaction.belongsTo(models.Farm, {
      foreignKey: 'farm_id',
      as: 'farm',
      onDelete: 'CASCADE',
    })
   
  };
 

  return Transaction;
};



