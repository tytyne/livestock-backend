'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },

      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.INTEGER
      },
     
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
     
      isVerified:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      status: {
        type: Sequelize.STRING,
        defaultValue:"active"
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
    await queryInterface.dropTable('Users');
  }
};