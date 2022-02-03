'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Medicines",
    [
      {
        name: "leva",
        quantity: 100,
        price:3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "vitamine",
        quantity: 150,
        price:6000,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "urukingo",
        quantity: 100,
        price:1000,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Medicines", null, {})
};