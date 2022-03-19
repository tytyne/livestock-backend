'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Items",
    [
      {
        name: "leva",
        unit: 100,
        price:3000,
        type:"Medicine",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "vitamine",
        unit: 150,
        price:6000,
        type:"Medicine",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "gumboro",
        unit: 100,
        price:1000,
        type:"Medicine",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "gukingira",
        unit: 1,
        price:300,
        type:"Vet_service",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "gutera inanga",
        unit: 1,
        price:400,
        type:"Vet_service",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "kubyaza",
        unit: 1,
        price:500,
        type:"Vet_service",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "ibiryo by'inkoko",
        unit: 1000,
        price:300,
        type:"Feed",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "ibiryo by'ingurube",
        unit: 1000,
        price:400,
        type:"Feed",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "ibiryo by'inka",
        unit: 1000,
        price:500,
        type:"Feed",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      // {
      //   name: " ",
      //   unit: "",
      //   price:"",
      //   type:"Others",
      //   description:" ",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
        
      // },
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Items", null, {})
};