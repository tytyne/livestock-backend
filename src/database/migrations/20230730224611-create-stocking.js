'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stockings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      farm_id:{
        type:Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      product_id: {
        type: Sequelize.STRING
      },
      internal_id: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      unit_value: {
        type: Sequelize.STRING
      },
      unit_weight: {
        type: Sequelize.STRING
      },
      track_lots: {
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      days_expires: {
        type: Sequelize.STRING
      },
      alert_amount: {
        type: Sequelize.STRING
      },
      alert_email: {
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
    await queryInterface.dropTable('Stockings');
  }
};


