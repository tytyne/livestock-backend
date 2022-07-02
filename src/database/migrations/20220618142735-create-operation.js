'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Operations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operationDate: {
        type: Sequelize.DATE
      },
      farmId: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type:Sequelize.INTEGER,
        
      },
      categoryId:{
        type:Sequelize.INTEGER,
      },
      itemId: {
        type: Sequelize.INTEGER
      },
      item_name: {
        type: Sequelize.STRING
      },
     
      quantity: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Operations');
  }
};



  
  


