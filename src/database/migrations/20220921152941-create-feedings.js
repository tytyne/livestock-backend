'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feedings', {
     
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      onsetDate: {
        type: Sequelize.DATE
      },
      feedId: {
        type: Sequelize.INTEGER,
      },
      createdBy: {
        type: Sequelize.UUID
      },
      animalId: {
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.STRING
      },
      observation:{
        type: Sequelize.STRING
      },
      feed_name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      repeat_until_date: {
        type: Sequelize.DATE
      },
      measurement: {
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
    await queryInterface.dropTable('Feedings');
  }
};