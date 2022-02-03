'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Services",
    [
      {
        code:"vet_service",
        description: " vet service",
        createdAt: new Date(),
        updatedAt: new Date(),   
      },
      {
        code:"medicine",
        description: "medicine" ,
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
       {
        code:"feed",
        description: "feed",
        createdAt: new Date(),
        updatedAt: new Date(),   
      },
     
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Services", null, {})
};