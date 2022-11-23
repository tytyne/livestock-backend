'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      reporting_year: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      ref_Id: {
        type: Sequelize.STRING
      },
      ref_type: {
        type: Sequelize.STRING
      },
      check_number: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Transactions');
  }
};