'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupAnimals', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name:{
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.STRING
      },
      farm_id:{
        type: Sequelize.UUID
      },
      active_only:{
        type: Sequelize.BOOLEAN
      },
      type:{
        type: Sequelize.STRING
      },
      records:{
        type:Sequelize.ARRAY(Sequelize.JSON)
      },
      createdBy:{
        type: Sequelize.UUID
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


