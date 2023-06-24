'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ListExpenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ListExpenses');
  }
};


// npx sequelize-cli db:migrate:undo --name 20221122173955-create-list-income.js

// npx sequelize-cli db:migrate:undo --name 20221122173928-create-list-expense.js

// npx sequelize-cli db:migrate:undo --name 20211213105358-create-animal.js
