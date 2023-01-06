'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Measurements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      condition_score: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.INTEGER,
      },
      fec: {
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      temp: {
        type: Sequelize.INTEGER
      },
      weight: {
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
    await queryInterface.dropTable('Measurements');
  }
};





// "id": "GUID",
// "condition_score": null,
// "created_at": "2022-01-14 21:48:19",
// "created_by": "User",
// "date": "2022-01-14",
// "fec": null,
// "height": null,
// "temp": null,
// "updated_at": "2022-01-14 21:48:19",
// "weight": 1600