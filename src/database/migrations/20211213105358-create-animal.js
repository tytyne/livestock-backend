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
      earring_num: {
        type: Sequelize.STRING
      },
      nid: {
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
      // expected_exit: {
      //   type: Sequelize.DATE
      // },
      // expected_exit_kgs: {
      //   type: Sequelize.STRING
      // },

      // unexpected_exit: {
      //   type: Sequelize.DATE
      // },
      // unexpected_cause: {
      //   type: Sequelize.STRING
      // },
      status:{
        type: Sequelize.STRING,
        defaultValue: 'active',
      },
      // facteur: {
      //   type: Sequelize.STRING
      // },
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