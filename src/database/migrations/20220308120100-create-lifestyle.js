'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lifestyles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farmerId: {
        type: Sequelize.INTEGER
      },
      expected_exit: {
        type: Sequelize.DATE
      },
      expected_exit_kgs: {
        type: Sequelize.STRING
      },

      unexpected_exit: {
        type: Sequelize.DATE
      },
      unexpected_cause: {
        type: Sequelize.STRING
      },
      facteur: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Lifestyles');
  }
};