'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SickBays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      onsetDate: {
        type: Sequelize.DATE
      },
      medicineId: {
        type: Sequelize.INTEGER,
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.INTEGER
      },
      groupAnimalId: {
        type: Sequelize.INTEGER
      },
      animalCategoryId: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      withdrawal_date: {
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
    await queryInterface.dropTable('SickBays');
  }
};



