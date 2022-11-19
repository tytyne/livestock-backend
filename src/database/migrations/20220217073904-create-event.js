'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assigned_to_id: {
        type: Sequelize.INTEGER
      },
      reference_id: {
        type: Sequelize.INTEGER
      },
      priority_id: {
        type: Sequelize.INTEGER
      },
      animal_id: {
        type: Sequelize.INTEGER
      },
      groupAnimal_id: {
        type: Sequelize.INTEGER
      },
      title:{
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
     },
      hours_spent: {
        type: Sequelize.INTEGER
      },
      todo: {
        type: Sequelize.STRING
      },
      period:{
        type: Sequelize.STRING
      },
      color:{
        type: Sequelize.STRING
      },
      checklist:{
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      all_day: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.STRING
      },
      reference_type: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.STRING
      },
      created_by_id: {
        type: Sequelize.INTEGER
      },
      complete:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
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
    await queryInterface.dropTable('Events');
  }
};


