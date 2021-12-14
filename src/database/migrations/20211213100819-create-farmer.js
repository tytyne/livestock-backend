'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Farmers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      animal_cat: {
        type: Sequelize.STRING
      },
      nid: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      farmer_cat: {
        type: Sequelize.STRING
      },
      bank_acc: {
        type: Sequelize.STRING
      },
      location: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Farmers');
  }
};