'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bins', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      // farm_id: {
      //   type:Sequelize.UUID,
      // },
      name: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      internal_id: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      warehouse_id: {
        type: Sequelize.UUID
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
    await queryInterface.dropTable('Bins');
  }
};