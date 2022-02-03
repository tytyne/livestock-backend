'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "VetServices",
    [
      {
        name: "gukingira",
        quantity: 1,
        price:300,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "gutera inanga",
        quantity: 1,
        price:400,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "kubyaza",
        quantity: 1,
        price:500,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("VetServices", null, {})
};
