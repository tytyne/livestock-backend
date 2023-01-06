'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inputs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal_id: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Inputs');
  }
};


