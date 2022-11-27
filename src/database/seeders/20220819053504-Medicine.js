'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Medicines",
    [
      {
       
        name: "vitamin starter",
        unit: 1,
        price:400,
        description:"boost growth",
        measurement:"milliliter",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        
        name: "antibiotic",
        unit: 10,
        price:500,
        description:"mpbaa",
        measurement:"milliliter",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
       
        name: "leva",
        unit: 10,
        price:3000,
        description:"mpbaa",
        measurement:"milliliter",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
  
        name: "vitamine",
        unit: 15,
        price:6000,
        description:"mpbaa",
        measurement:"milliliter",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
    ])

  }
