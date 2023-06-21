'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SickBays', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      onsetDate: {
        type: Sequelize.DATE
      },
      farm_id: {
        type: Sequelize.UUID,
      },
      createdBy: {
        type: Sequelize.UUID
      },
      animalId: {
        type: Sequelize.UUID
      },
      groupId: {
        type: Sequelize.UUID
      },
      intervention: {
        type: Sequelize.STRING
      },
      observation:{
        type: Sequelize.STRING
      },
      medicine_name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      total: {
        type: Sequelize.DECIMAL
      },
      measurement: {
        type: Sequelize.STRING
      },
      record_transaction: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      per_head: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
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
    await queryInterface.dropTable('SickBays');
  }
};



