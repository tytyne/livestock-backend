'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Measurements', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      condition_score: {
        type: Sequelize.INTEGER
      },
      farm_id:{
        type:Sequelize.UUID,
      },
      date: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.UUID,
      },
      fec: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.UUID
      },
      height: {
        type: Sequelize.INTEGER
      },
      temp: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Measurements');
  }
};


