'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AnimalExpenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creationDate: { farmId: {
        type: Sequelize.INTEGER
      },
        type: Sequelize.DATE
      },
      animalId: {
        type:Sequelize.INTEGER,
        
      },
      categoryId:{
        type:Sequelize.INTEGER,
      },
      
      itemId:{
        type:Sequelize.INTEGER,
      },
      
      item_name: {
        type: Sequelize.STRING
      },
     
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      description:{
        type:Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      updatedBy: {
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
    await queryInterface.dropTable('AnimalExpenses');
  }
};