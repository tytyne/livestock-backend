'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {

    type: DataTypes.STRING,
    amount:DataTypes.STRING,
    date:DataTypes.DATE,
    reporting_year:DataTypes.STRING,
    vendor:DataTypes.STRING,
    category:DataTypes.STRING,
    ref_Id:DataTypes.STRING,
    ref_type:DataTypes.STRING,
    check_number:DataTypes.STRING,
    keywords:DataTypes.STRING,
    description:DataTypes.STRING,
   
   
  }, { });
 

  return Transaction;
};



