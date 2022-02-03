'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Feeds",
    [
      {
        name: "ibiryo by'inkoko",
        quantity: 1000,
        price:300,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "ibiryo by'ingurube",
        quantity: 1000,
        price:400,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "ibiryo by'inka",
        quantity: 1000,
        price:500,
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Feeds", null, {})
};