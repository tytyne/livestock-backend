'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vaccinatings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
       
      },
      onsetDate: {
        type: Sequelize.DATE
      },
      vaccinationId: {
        type: Sequelize.INTEGER
      },
      farmId: {
        type: Sequelize.STRING
      },
      treatmentMethodId: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.UUID
      },
      groupId: {
        type: Sequelize.UUID
      },
      createdBy: {
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      unit: {
        type: Sequelize.DECIMAL
      },
      measurement: {
        type: Sequelize.STRING
      },
      
      nextAppointment: {
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
    await queryInterface.dropTable('Vaccinatings');
  }
};

