'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupAnimals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.STRING
      },
      farm_id:{
        type: Sequelize.INTEGER
      },
      groupType_id:{
        type: Sequelize.INTEGER
      },
      active_only:{
        type: Sequelize.BOOLEAN
      },
      type:{
        type: Sequelize.STRING
      },
      records:{
        type: Sequelize.INTEGER
      },
      createdBy:{
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupAnimals');
  }
};


