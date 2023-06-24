'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Breedings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      status: {
        type: Sequelize.STRING
      },
      farm_id:{
        type:Sequelize.UUID,
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
        type: Sequelize.UUID,
      },
      technicial: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
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
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Breedings');
  }
};