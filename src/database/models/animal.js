module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {

    birth_date: DataTypes.DATE,
    birth_weight: DataTypes.STRING,
    bred_date: DataTypes.DATE,
    breed: DataTypes.STRING,
    breed_id: DataTypes.STRING,
    breeding_status:DataTypes.STRING,
    breeding_stock: DataTypes.STRING,
    coloring: DataTypes.STRING,
    condition_score: DataTypes.STRING,
    contact_id: DataTypes.STRING,
    death_date: DataTypes.DATE,
    deceased_reason:DataTypes.STRING,
    description:DataTypes.STRING,
    electronic_id: DataTypes.STRING,
    estimated_value:DataTypes.STRING,
    father_id: DataTypes.STRING,
    feed: DataTypes.STRING,
    gender: DataTypes.STRING,
    group_id: DataTypes.STRING,
    group_qty: DataTypes.STRING,
    harvest_label: DataTypes.STRING,
    harvest_unit: DataTypes.STRING,
    height:DataTypes.STRING,
    internal_id: DataTypes.STRING,
    is_group: DataTypes.BOOLEAN,
    is_neutered: DataTypes.BOOLEAN,
    keywords: DataTypes.STRING,
    market_price:DataTypes.STRING,
    measurement_date: DataTypes.DATE,
    mother_id: DataTypes.STRING,
    name: DataTypes.STRING,
    on_feed: DataTypes.STRING,
    other_tag_number: DataTypes.STRING,
    purchase_date: DataTypes.DATE,
    purchase_price:DataTypes.STRING,
    purchased: DataTypes.BOOLEAN,
    purchased_from_id: DataTypes.STRING,
    registry_number: DataTypes.STRING,
    retention_score: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    sale_price: DataTypes.STRING,
    sold_to:DataTypes.STRING,
    status:DataTypes.STRING ,
    tag_color: DataTypes.STRING,
    tag_number: DataTypes.STRING,
    weight: DataTypes.STRING,
    earring_num:DataTypes.STRING,
    insured:DataTypes.BOOLEAN,
    insuranceDate:DataTypes.DATE,
    insuranceExpiration:DataTypes.DATE
  
  }, { });
  Animal.associate = function(models) {
 
    Animal.belongsTo(models.Farm, {
      foreignKey: 'farm_id',
      as: 'farm',
      onDelete: 'CASCADE',
    })
   Animal.belongsTo(models.PurposeList, {
      foreignKey: 'purpose_id',
      as: 'purposeList',
      onDelete: 'CASCADE',
    })
   Animal.belongsTo(models.AnimalCategory, {
      foreignKey: 'animalCategory_id',
      as: 'animalCategory',
      onDelete: 'CASCADE',
    })
    Animal.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'user',
      onDelete: 'CASCADE',
    })
  
  };

  return Animal;
};

