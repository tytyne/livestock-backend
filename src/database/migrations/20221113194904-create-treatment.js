'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Treatments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      animalId: {
        type: Sequelize.UUID
      },
      groupId: {
        type: Sequelize.UUID
      },
      farm_id:{
        type:Sequelize.UUID,
      },
      createdBy: {
        type: Sequelize.UUID,
      },
      type: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
      },
      batch: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      mode: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      withdrawal_date: {
        type: Sequelize.DATE
      },
      retreat_date: {
        type: Sequelize.DATE
      },
      technician: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.DECIMAL
      },
      record_transaction: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      keywords: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Treatments');
  }
};

// "id": "GUID",
// "amount": "",
// "batch": "123",
// "cost": 0,
// "created_at": "2022-02-02 15:23:18",
// "created_by": "User",
// "date": "2022-02-02",
// "description": "",
// "keywords": "",
// "mode": "Intramuscular (in the muscle)",
// "product": "BRSV Vaccine",
// "retreat_date": null,
// "site": "",
// "technician": "",
// "type": "Vaccination",
// "updated_at": "2022-02-02 15:23:18",
// "withdrawal_date": null