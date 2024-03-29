'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdBy: {
        type: Sequelize.UUID,
      },
      farm_id: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
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
        type: Sequelize.UUID
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
      payment_system:{
        type: Sequelize.STRING
      },
      customer:{
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      paid: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
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
    await queryInterface.dropTable('Transactions');
  }
};

