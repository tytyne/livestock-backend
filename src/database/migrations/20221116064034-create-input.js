'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inputs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      animal_id: {
        type: Sequelize.UUID,
      },
      farm_id: {
        type: Sequelize.UUID,
      },
      createdBy: {
        type: Sequelize.UUID
      },
      farm_id:{
        type:Sequelize.UUID,
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      unit: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      groupId: {
        type: Sequelize.UUID
      },
      cost: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inputs');
  }
};


