'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      earring_num: {
        type: Sequelize.STRING
      },
      birthdate: {
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
      birthkgs: {
        type: Sequelize.STRING
      },
      parent: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      expected_exit: {
        type: Sequelize.DATE
      },
      expected_exit_kgs: {
        type: Sequelize.STRING
      },

      status:{
        type: Sequelize.STRING,
        defaultValue: 'active',
      },
     
      createdBy: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Animals');
  }
};