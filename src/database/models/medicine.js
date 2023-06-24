
module.exports = (sequelize, DataTypes) => {
  const Medicine= sequelize.define('Medicine', {
    name: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    measurement:DataTypes.STRING,
    description:DataTypes.STRING

 
  
  }, { 
    paranoid: true
  });
  // Medicine.associate = function(models) {

  // }
 
  return Medicine;
};