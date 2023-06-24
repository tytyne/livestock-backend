'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      farm_id:{
        type:Sequelize.UUID,
      },
      createdBy: {
        type: Sequelize.UUID,
      },
      assigned_to_id: {
        type: Sequelize.UUID
      },
      reference_id: {
        type: Sequelize.UUID
      },
      priority_id: {
        type: Sequelize.INTEGER
      },
      reference_type: {
        type: Sequelize.STRING
      },
      title:{
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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
        type: Sequelize.ARRAY(Sequelize.STRING)
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
      complete:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      per_head: {
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
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};


