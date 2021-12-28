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
      province: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      cell: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      village: {
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.DataTypes.ENUM('active','unactive'),
        defaultValue: 'active',
      },
      createdBy: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Farmers');
  }
};