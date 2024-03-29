'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Yields', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      animal_id:{
        type: Sequelize.UUID
            
      },
      farm_id:{
        type:Sequelize.UUID,
      },
      createdBy: {
        type: Sequelize.UUID,
      },
      qty: {
        type: Sequelize.STRING
      },

      date: {
        type: Sequelize.DATE
      },

      batch_number: {
        type: Sequelize.STRING
      },

      trace_number: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },

      price: {
        type: Sequelize.STRING
      },

      description: {
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
    await queryInterface.dropTable('Yields');
  }
};


// harvest[qty]: 234
// harvest[date]: 2023-01-06
// harvest[batch_number]: 
// harvest[trace_number]: 
// harvest[grade]: 
// harvest[price]: 210.00
// harvest[description]: 
// commit: Save