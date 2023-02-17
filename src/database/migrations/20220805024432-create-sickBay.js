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
      medicineId: {
        type: Sequelize.INTEGER,
      },
      farmId: {
        type: Sequelize.STRING,
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
      withdrawal_date: {
        type: Sequelize.DATE
      },
      measurement: {
        type: Sequelize.STRING
      },
      record_transaction: {
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SickBays');
  }
};



