'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Breedings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      update_animal_status: {
        type: Sequelize.STRING
      },
      breeding_method: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      bred_with_id: {
        type: Sequelize.STRING
      },
      animalId: {
        type: Sequelize.STRING
      },
      technicial: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdBy: {
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
    await queryInterface.dropTable('Breedings');
  }
};