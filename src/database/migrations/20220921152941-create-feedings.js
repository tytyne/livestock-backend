'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feedings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      onsetDate: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      animalCategoryId: {
        type: Sequelize.INTEGER
      },
      inventory_location_id: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.INTEGER
      },
      groupAnimalId: {
        type: Sequelize.INTEGER
      },
      feedId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      feed_name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      repeat_until_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('AnimalFeeds');
  }
};