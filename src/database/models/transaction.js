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
    description:DataTypes.STRING,
   
   
  }, { });
  Transaction.associate = function(models) {

    Transaction.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })

    Transaction.belongsTo(models.Farm, {
      foreignKey: 'farmId',
      as: 'farm',
      onDelete: 'CASCADE',
    })
    // Transaction.belongsTo(models.Animal, {
    //   foreignKey: 'ref_Id',
    //   as: 'reference',
    //   onDelete: 'CASCADE',
    // })
   
   
  };
 

  return Transaction;
};



