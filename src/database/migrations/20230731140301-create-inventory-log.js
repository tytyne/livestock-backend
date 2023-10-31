'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InventoryLogs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      inventory_id: {
        type:Sequelize.UUID,
      },
      amount: {
        type: Sequelize.DECIMAL,
        defaultValue:0
      },
      date: {
        type: Sequelize.DATE
      },
      warehouse_id: {
        type:Sequelize.UUID,
      },
      source: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      original_qty: {
        type: Sequelize.DECIMAL,
        defaultValue:0
      },
      qty_remaining: {
        type: Sequelize.DECIMAL,
        defaultValue:0
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
    await queryInterface.dropTable('InventoryLogs');
  }
};