'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Heightings",
    [
      {
        key: "medicine",
        name:"Medicine",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "feed",
        name:"Feed",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        key: "vet_service",
        name:"Vet services",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        key: "other",
        name:"Others",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Heightings", null, {})
};

