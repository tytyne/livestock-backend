'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Items",
    [
      {
        categoryId:1,
        name: "leva",
        unit: 100,
        price:3000,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:1,
        name: "vitamine",
        unit: 150,
        price:6000,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:1,
        name: "gumboro",
        unit: 100,
        price:1000,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:3,
        name: "gukingira",
        unit: 1,
        price:300,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:3,
        name: "gutera inanga",
        unit: 1,
        price:400,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:3,
        name: "kubyaza",
        unit: 1,
        price:500,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:2,
        name: "ibiryo by'inkoko",
        unit: 1000,
        price:300,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:2,
        name: "ibiryo by'ingurube",
        unit: 1000,
        price:400,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        categoryId:2,
        name: "ibiryo by'inka",
        unit: 1000,
        price:500,
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Items", null, {})
};