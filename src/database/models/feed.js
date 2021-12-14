module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define('Feed', {

    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
 
  
  }, { });
 

  return Feed;
};