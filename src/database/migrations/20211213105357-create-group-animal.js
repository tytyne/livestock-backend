'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupAnimals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING
      },
      number:{
        type: Sequelize.INTEGER
      },
      farmId:{
        type: Sequelize.INTEGER
      },
      purposeId:{
        type: Sequelize.INTEGER
      },
      animalCategoryId:{
        type: Sequelize.INTEGER
      },
      createdBy:{
        type: Sequelize.INTEGER
      },
  
      femaleNumber:{
        type: Sequelize.INTEGER
      },
      maleNumber:{
        type: Sequelize.INTEGER
      },
      birthdate:{
        type: Sequelize.STRING
      },
      ageInDays:{
        type: Sequelize.INTEGER
      },
      ageInWeeks:{
        type: Sequelize.INTEGER
      },
      ageInMonths:{
        type: Sequelize.INTEGER
      },
      ageInYears:{
        type: Sequelize.INTEGER
      },
      groupAnimalCost:{
        type: Sequelize.INTEGER
      },
      deathReason:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.INTEGER
      },
      expected_exit:{
        type: Sequelize.DATE
      },
      status:{
        type: Sequelize.STRING,
        defaultValue: 'active',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupAnimals');
  }
};


