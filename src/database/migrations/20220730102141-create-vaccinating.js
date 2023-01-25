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
      treatmentMethodId: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.UUID
      },
      createdBy: {
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      measurement: {
        type: Sequelize.STRING
      },
      
      nextAppointment: {
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
    await queryInterface.dropTable('Vaccinatings');
  }
};

