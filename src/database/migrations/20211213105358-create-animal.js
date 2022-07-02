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
      farmId: {
        type: Sequelize.INTEGER
      },
      userIDDssss: {
        type: Sequelize.INTEGER
      },
      createdBy: {
        type: Sequelize.STRING
      },
      earring_num: {
        type: Sequelize.STRING
      },
      
      animal_cat: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
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