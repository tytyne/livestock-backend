'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vaccinatings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      onsetDate: {
        type: Sequelize.DATE
      },
      groupAnimalId: {
        type: Sequelize.INTEGER
      },
     
      vaccinationId: {
        type: Sequelize.INTEGER
      },
      createdBy: {
        type: Sequelize.INTEGER
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

