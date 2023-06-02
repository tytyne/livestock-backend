'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    date:DataTypes.DATE,
    description:DataTypes.STRING,
    category:DataTypes.STRING,
    keywords:DataTypes.STRING,
    assigned_to_id: DataTypes.STRING,
    add_to_calendar:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
   
   
  }, { });
  Note.associate = function(models) {
  Note.belongsTo(models.Animal, {
    foreignKey: 'animalId',
    as: 'animal',
    onDelete: 'CASCADE',
  })
 

  Note.belongsTo(models.User, {
    foreignKey: 'createdBy',
    as: 'user',
    onDelete: 'CASCADE',
  })
 
 
};

  return Note;
};


