'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Yields', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal_id:{
        type: Sequelize.INTEGER
            
      },
      qty: {
        type: Sequelize.STRING
      },

      date: {
        type: Sequelize.STRING
      },

      batch_number: {
        type: Sequelize.STRING
      },

      grade: {
        type: Sequelize.STRING
      },

      price: {
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
    await queryInterface.dropTable('Yields');
  }
};